<script setup>
import 'tw-elements';
import { ref, onMounted } from 'vue';
import { getProductApi } from '../js/api';
import ProductModal from '../components/ProductModal.vue';

const products = ref();
const productData = ref({});
onMounted(async () => {
  products.value = await getProductApi()
    .then((res) => res.data.products)
    .catch((err) => console.log(err));
});
const openModal = (product) => {
  productData.value = product;
};
</script>
<template>
  <div class="w-1/2 mx-auto">
    <div class="mx-auto my-20 flex flex-col">
      <h1 class="text-5xl">產品列表</h1>
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    產品名稱
                  </th>
                  <th
                    scope="col"
                    class="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    原價
                  </th>
                  <th
                    scope="col"
                    class="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    售價
                  </th>
                  <th
                    scope="col"
                    class="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    是否啟用
                  </th>
                  <th
                    scope="col"
                    class="text-md font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    查看細節
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="product in products"
                  :key="product.id"
                  class="
                    bg-white
                    border-b
                    transition
                    duration-300
                    ease-in-out
                    hover:bg-gray-100
                  "
                >
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-md
                      font-medium
                      text-gray-900
                    "
                  >
                    {{ product.title }}
                  </td>
                  <td
                    class="
                      text-md text-gray-900
                      font-light
                      px-6
                      py-4
                      whitespace-nowrap
                    "
                  >
                    {{ product.origin_price }}
                  </td>
                  <td
                    class="
                      text-md text-gray-900
                      font-light
                      px-6
                      py-4
                      whitespace-nowrap
                    "
                  >
                    {{ product.price }}
                  </td>
                  <td
                    class="
                      text-md text-gray-900
                      font-light
                      px-6
                      py-4
                      whitespace-nowrap
                    "
                  >
                    <p v-if="product.is_enabled" class="text-lg text-green-600 font-bold">啟用</p>
                    <p v-else class="text-lg font-bold">未啟用</p>
                  </td>
                  <td
                    class="
                      text-md text-gray-900
                      font-light
                      px-6
                      py-4
                      whitespace-nowrap
                    "
                  >
                    <button
                      @click="openModal(product)"
                      data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      class="
                        inline-block
                        px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700
                        focus:shadow-lg
                        focus:outline-none
                        focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                      "
                    >
                      查看細節
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      <ProductModal :product="productData"/>
  </div>
</template>
