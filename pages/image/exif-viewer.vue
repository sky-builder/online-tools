<template>
  <div>
    <h1>在线查看图片Exif信息</h1>
    <input type="file" @input="handleInput" />
    <img id="js-img" :style="imgStyle" src alt="user upload image" />
    <table>
      <tbody>
        <tr v-for="item in metaDataList" :key="item[0]">
          <td>{{ item[0] }}</td>
          <td>{{ item[1] }}</td>
        </tr>
      </tbody>
    </table>
    <h2 class="my-4">Exif 解释</h2>
    <p>
      可交换图像文件格式（英语：Exchangeable image file format，官方简称Exif），是专门为数码相机的照片设定的文件格式，可以记录数码照片的属性信息和拍摄数据。
      <br />Exif最初由日本电子工业发展协会在1996年制定，版本为1.0。1998年，升级到2.1版，增加了对音频文件的支持。2002年3月，发表了2.2版。
      <br />Exif可以附加于JPEG、TIFF、RIFF等文件之中，为其增加有关数码相机拍摄信息的内容和索引图或图像处理软件的版本信息。
      <br />Windows 7操作系统具备对Exif的原生支持，通过鼠标右键点击图片打开菜单，点击属性并切换到详细信息标签下即可直接查看Exif信息。
      <br />Exif信息是可以被任意编辑的，因此只有参考的功能。
      <br />Exif信息以0xFFE1作为开头标记，后两个字节表示Exif信息的长度。所以Exif信息最大为64 kB，而内部采用TIFF格式。
      <br />
    </p>
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
        height: "300px",
        display: this.isImageLoaded ? "block" : "none"
      };
    }
  },
  methods: {
    handleInput(e) {
      if (!e.target.files || !e.target.files[0]) return;
      let file = e.target.files[0];
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