<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { signApi } from '../js/api';
import 'tw-elements';

const router = useRouter();
const data = ref({
  username: '',
  password: '',
});

const isEmpty = () => (data.value.username === '' || data.value.password === '');
const cleanInput = () => {
  data.value.username = '';
  data.value.password = '';
};
function signIn() {
  if (isEmpty()) {
    cleanInput();
    alert('請輸入完整資訊');
  } else {
    signApi(data.value).then(() => {
      cleanInput();
      router.push('/admin');
    }).catch(() => alert('登入失敗'));
  }
}
</script>

<template>
  <div class="w-1/2 mx-auto py-[10%]">
    <h1 class="text-4xl text-center">登入</h1>
    <div class="block mx-auto p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <form>
        <div class="form-group mb-6">
          <label
            for="email"
            class="form-label inline-block mb-2 text-gray-700"
            >帳號：</label
          >
          <input
            v-model="data.username"
            type="email"
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700
              focus:bg-white
              focus:border-blue-600
              focus:outline-none
            "
            id="email"
            aria-describedby="emailHelp"
            placeholder="請輸入帳號"
          />
          <small id="emailHelp" class="block mt-1 text-xs text-gray-600"
            >請輸入註冊的信箱</small
          >
        </div>
        <div class="form-group mb-6">
          <label
            for="password"
            class="form-label inline-block mb-2 text-gray-700"
            >密碼：</label
          >
          <input
            v-model="data.password"
            type="password"
            class="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700
              focus:bg-white
              focus:border-blue-600
              focus:outline-none
            "
            id="password"
            placeholder="請輸入密碼"
          />
        </div>
        <button
          @click="signIn"
          type="button"
          class="
            w-full
            px-6
            py-2.5
            bg-green-600
            text-white
            font-medium
            text-md
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-green-700 hover:shadow-lg
            focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-green-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          登入
        </button>
      </form>
    </div>
  </div>
</template>
