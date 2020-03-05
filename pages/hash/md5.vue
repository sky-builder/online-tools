<template>
  <div>
    <h1>在线MD5加密</h1>
    <label for="js-input">输入字符串：</label>
    <textarea id="js-input" v-model="input" class="w-full" name cols="30" rows="10"></textarea>
    <button @click="handleClick">加密</button>
    <div v-if="isResultVisible">
      <span>加密结果：</span>
      <span>{{ output }}</span>
      <button @click="handleCopy">复制</button>
      <span
        id="js-copy-msg"
        class="transition hidden bg-green-300 text-gray-700 text-sm py-1 px-2 rounded self-center flex-none ml-2"
      >复制成功!</span>
    </div>
    <div v-if="isResultVisible">
      <span>加密文本：</span>
      <span>{{ input2 }}</span>
    </div>
    <h2 class="my-4">FAQ</h2>
    <h3 class="my-2">什么是MD5加密？</h3>
    <p>
      MD5消息摘要算法（英语：MD5 Message-Digest Algorithm），一种被广泛使用的密码散列函数，可以产生出一个128位（16字节）的散列值（hash value），用于确保信息传输完整一致。MD5由美国密码学家罗纳德·李维斯特（Ronald Linn Rivest）设计，于1992年公开，用以取代MD4算法。这套算法的程序在 RFC 1321 中被加以规范。
      将数据（如一段文字）运算变为另一固定长度值，是散列算法的基础原理。
      <br />
    </p>
    <h3 class="my-2">MD5加密有什么作用？</h3>
    <p>
      MD5已经广泛使用在为文件传输提供一定的可靠性方面。例如，服务器预先提供一个MD5校验和，用户下载完文件以后，用MD5算法计算下载文件的MD5校验和，然后通过检查这两个校验和是否一致，就能判断下载的文件是否出错。
      <br />MD5亦有应用于部分网上赌场以保证赌博的公平性，原理是系统先在玩家下注前已生成该局的结果，将该结果的字符串配合一组随机字符串利用MD5 加密，将该加密字符串于玩家下注前便显示给玩家，再在结果开出后将未加密的字符串显示给玩家，玩家便可利用MD5工具加密验证该字符串是否吻合。
      <br />例子: 在玩家下注骰宝前，赌场便先决定该局结果，假设生成的随机结果为4、5、 6大，赌场便会先利用MD5 加密“4, 5, 6”此字符串并于玩家下注前告诉玩家；由于赌场是无法预计玩家会下什么注，所以便能确保赌场不能作弊；当玩家下注完毕后，赌场便告诉玩家该原始字符串，即“4, 5, 6”，玩家便可利用MD5工具加密该字符串是否与下注前的加密字符串吻合。
      <br />该字符串一般会加上一组随机字符串（Random string），以防止玩家利用碰撞（Collision）解密字符串，但如使用超级电脑利用碰撞亦有可能从加上随机字符串的加密字符串中获取游戏结果。随机字符串的长度与碰撞的次数成正比关系，一般网上赌场使用的随机字符串是长于20字，有些网上赌场的随机字符串更长达500字，以增加解密难度。
    </p>
    <h3 class="my-2">MD5加密安全吗？</h3>
    <p>
      1996年后被证实存在弱点，可以被加以破解，对于需要高度安全性的数据，专家一般建议改用其他算法，如SHA-2。2004年，证实MD5算法无法防止碰撞（collision），因此不适用于安全性认证，如SSL公开密钥认证或是数字签名等用途。
      <br />当前，MD5算法因其普遍、稳定、快速的特点，仍广泛应用于普通数据的错误检查领域。例如在一些BitTorrent下载中，软件将通过计算MD5检验下载到的文件片段的完整性。
      <br />
    </p>
  </div>
</template>

<script>
import copyToClipboard from "@/assets/js/copy-to-clipboard";

export default {
  head() {
    return {
      script: [{ src: "/md5.min.js" }]
    };
  },
  data() {
    return {
      isResultVisible: false,
      input: "",
      input2: "",
      output: "",
      timer: null
    };
  },
  methods: {
    handleCopy() {
      copyToClipboard(this.output);
      let copyMsgEl = document.getElementById("js-copy-msg");
      copyMsgEl.classList.remove("hidden");
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        copyMsgEl.classList.add("hidden");
        clearTimeout(this.timer);
      }, 1500);
    },
    handleClick() {
      this.input2 = this.input;
      this.output = md5(this.input2);
      this.isResultVisible = true;
    }
  }
};
</script>

<style>
</style>