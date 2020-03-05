<template>
  <div>
    <h1>在线AES加密/解密</h1>
    <label for="js-key">密匙</label>
    <br />
    <input type="text" name="key" id="js-key" v-model="key" />
    <br />
    <label for="js-input">输入</label>
    <br />
    <textarea name="input" id="js-input" cols="30" rows="10" v-model="input" class="w-full"></textarea>
    <div>
      <button @click="doEncrypt">加密</button>
      <button @click="doDecrypt">解密</button>
    </div>
    <label for="js-output">输出</label>
    <br />
    <textarea name="output" id="js-output" cols="30" rows="10" v-model="output" class="w-full"></textarea>
    <h2 class="my-4">FAQ</h2>
    <h3 class="my-2">什么是AES加密？</h3>
    <p>
      高级加密标准（英语：Advanced Encryption Standard，缩写：AES），在密码学中又称Rijndael加密法，是美国联邦政府采用的一种区块加密标准。这个标准用来替代原先的DES，已经被多方分析且广为全世界所使用。经过五年的甄选流程，高级加密标准由美国国家标准与技术研究院（NIST）于2001年11月26日发布于FIPS PUB 197，并在2002年5月26日成为有效的标准。2006年，高级加密标准已然成为对称密钥加密中最流行的算法之一。
      <br />该算法为比利时密码学家Joan Daemen和Vincent Rijmen所设计，结合两位作者的名字，以Rijndael为名投稿高级加密标准的甄选流程。（Rijndael的发音近于"Rhine doll"）
    </p>
    <h3 class="my-2">AES加密的安全性如何？</h3>
    <p>
      截至2006年，针对AES唯一的成功攻击是旁道攻击或社会工程学攻击。美国国家安全局审核了所有的参与竞选AES的最终入围者（包括Rijndael），认为他们均能够满足美国政府传递非机密文件的安全需要。2003年6月，美国政府宣布AES可以用于加密机密文件：
      <br />
      <br />&nbsp;&nbsp;&nbsp;&nbsp;The design and strength of all key lengths of the AES algorithm（i.e., 128, 192 and 256）are sufficient to protect classified information up to the SECRET level. TOP SECRET information will require use of either the 192 or 256 key lengths. The implementation of AES in products intended to protect national security systems and/or information must be reviewed and certified by NSA prior to their acquisition and use.
      <br />（译：AES加密算法（使用128，192，和256比特密钥的版本）的安全性，在设计结构及密钥的长度上俱已到达保护机密信息的标准。最高机密信息的传递，则至少需要192或256比特的密钥长度。用以传递国家安全信息的AES实现产品，必须先由国家安全局审核认证，方能被发放使用。）
      <br />
      <br />这标志着，由美国国家安全局NSA批准在最高机密信息上使用的加密系统首次可以被公开使用。许多大众化产品只使用128位密钥当作默认值；由于最高机密文件的加密系统必须保证数十年以上的安全性，故推测NSA可能认为128位太短，才以更长的密钥长度为最高机密的加密保留了安全空间。
      <br />
      <br />通常破解一个区块加密系统最常见的方式，是先对其较弱版本（加密循环次数较少）尝试各种攻击。AES中128位密钥版本有10个加密循环，192比特密钥版本有12个加密循环，256比特密钥版本则有14个加密循环。至2006年为止，最著名的攻击是针对AES 7次加密循环的128位密钥版本，8次加密循环的192比特密钥版本，和9次加密循环的256比特密钥版本所作的攻击。
      <br />
      <br />由于已遭破解的弱版的AES，其加密循环数和原本的加密循环数相差无几，有些密码学家开始担心AES的安全性：要是有人能将该著名的攻击加以改进，这个区块加密系统就会被破解。在密码学的意义上，只要存在一个方法，比穷举法还要更有效率，就能被视为一种“破解”。故一个针对AES 128位密钥的攻击若“只”需要2120计算复杂度（少于穷举法 2128），128位密钥的AES就算被破解了；即便该方法在当前还不实用。从应用的角度来看，这种程度的破解依然太不切实际。最著名的暴力攻击法是distributed.net针对64位密钥RC5所作的攻击。
      <br />
      <br />其他的争议则着重于AES的数学结构。不像其他区块加密系统，AES具有相当井然有序的代数结构。虽然相关的代数攻击尚未出现，但有许多学者认为，把安全性创建于未经透彻研究过的结构上是有风险的。Ferguson，Schroeppel和Whiting因此写道：“...我们很担心Rijndael [AES]算法应用在机密系统上的安全性。”
      <br />
      <br />2002年，Nicolas Courtois和Josef Pieprzyk发表名为XSL攻击的理论性攻击，试图展示AES一个潜在的弱点。但该攻击的数学分析有点问题，推测应是作者的计算有误。因此，这种攻击法是否对AES奏效，仍是未解之谜。就现阶段而言，XSL攻击AES的效果不十分显著，故将之应用于实际情况的可能性并不高。
    </p>
  </div>
</template>

<script>
import cryptoJs from "crypto-js";
export default {
  data() {
    return {
      input: "",
      output: "",
      key: ""
    };
  },
  methods: {
    doEncrypt() {
      let input = this.input;
      let key = this.key;
      let output = cryptoJs.AES.encrypt(input, key).toString();
      this.output = output;
    },
    doDecrypt() {
      let input = this.input;
      let key = this.key;
      let output = cryptoJs.AES.decrypt(input, key);
      output = cryptoJs.enc.Utf8.stringify(output);
      this.output = output;
    }
  }
};
</script>

<style>
</style>