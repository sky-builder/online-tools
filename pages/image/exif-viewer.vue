<template>
  <div>
    <h1>📸在线查看图片Exif信息</h1>
    <drag-and-drop-uploader @files="handleInput" />
    <img id="js-img" :style="imgStyle" class="my-2" src alt="user upload image" />
    <table class="w-full">
      <tbody>
        <tr v-for="item in metaDataList" :key="item[0]">
          <td class="px-4 py-2 border border-gray-300">{{ item[0] }}</td>
          <td class="px-4 py-2 border border-gray-300">{{ item[1] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import exifJs from "exif-js";

export default {
  head() {
    return {
      title: '图片Exif信息查看',
    }
  },
  data() {
    return {
      metaDataList: [],
      isImageLoaded: false
    };
  },
  computed: {
    imgStyle() {
      return {
        width: "auto",
        height: "350px",
        display: this.isImageLoaded ? "block" : "none"
      };
    }
  },
  methods: {
    handleInput(files) {
      if (!files || !files[0]) return;
      let file = files[0];
      let that = this;
      let fileReader = new FileReader();
      fileReader.onload = e => {
        let img = document.getElementById("js-img");
        img.onload = e => {
          exifJs.getData(file, function() {
            let metaData = exifJs.getAllTags(this);
            let keys = Object.keys(metaData);
            if (keys.length < 1) {
              window.alert("该图片无 exif 数据");
              return;
            }
            let metaDataCn = {
              图片大小: `${img.naturalWidth} x ${img.naturalHeight}`,
              相机型号: metaData.Model,
              制造厂商: metaData.Make,
              拍摄时间: metaData.DateTimeOriginal,
              焦距: metaData.FocalLength ? metaData.FocalLength + "mm" : "",
              曝光时间: metaData.ExposureTime
                ? metaData.ExposureTime + "s"
                : "",
              ISO感光度: metaData.ISOSpeedRatings,
              光圈值: metaData.FNumber
            };
            if (metaData.GPSLongitude && metaData.GPSLatitude) {
              metaDataCn[
                "地点"
              ] = `${metaData.GPSLongitudeRef} ${metaData.GPSLongitude[0]}°${metaData.GPSLongitude[1]}′${metaData.GPSLongitude[2]}, ${metaData.GPSLatitudeRef} ${metaData.GPSLatitude[0]}°${metaData.GPSLatitude[1]}′${metaData.GPSLatitude[2]}`;
            }
            that.isImageLoaded = true;
            that.metaDataList = Object.entries(metaDataCn);
          });
        };

        img.src = e.target.result;
      };
      if (file.type !== "image/jpeg") {
        window.alert("只支持 image/jpeg 格式图片");
        return;
      }
      fileReader.readAsDataURL(file);
    }
  }
};
</script>

<style>
</style>