<script setup>
import 'tw-elements';
import { ref, onMounted } from 'vue';
import { getProductApi } from '../js/api';
import ProductModal from '../components/ProductModal.vue';
import PaginationBar from '../components/PaginationBar.vue';

const products = ref();
const pagination = ref({});
const productData = ref({});
const modalStatus = ref('');

onMounted(async () => {
  getProductApi()
    .then((res) => {
      products.value = res.data.products;
      pagination.value = res.data.pagination;
    })
    .catch((err) => console.log(err));
});
const openModal = (product, status) => {
  productData.value = JSON.parse(JSON.stringify(product));
  modalStatus.value = status;
};
const update = async (page) => {
  getProductApi(page)
    .then((res) => {
      products.value = res.data.products;
      pagination.value = res.data.pagination;
    })
    .catch((err) => console.log(err));
};
</script>
<template>
  <div class="w-1/2 mx-auto">
    <div class="mx-auto my-20 flex flex-col">
      <h1 class="text-5xl">產品列表</h1>
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <div class="flex justify-end">
              <button
                  @click="openModal({imagesUrl: [], is_enabled: 0}, 'newProduct')"
                  data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="btn-primary">
                  <i class="fa-solid fa-square-plus text-lg"></i>
              </button>
            </div>
            <table class="min-w-full">
              <thead class="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    class="t-head-th"
                  >
                    產品名稱
                  </th>
                  <th
                    scope="col"
                    class="t-head-th"
                  >
                    原價
                  </th>
                  <th
                    scope="col"
                    class="t-head-th"
                  >
                    售價
                  </th>
                  <th
                    scope="col"
                    class="t-head-th"
                  >
                    是否啟用
                  </th>
                  <th
                    scope="col"
                    class="t-head-th"
                  >
                    刪除/編輯
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="product in products"
                  :key="product.id"
                  class="t-body-tr">
                  <td class="t-body-td">
                    {{ product.title }}
                  </td>
                  <td class="t-body-td">
                    {{ product.origin_price }}
                  </td>
                  <td class="t-body-td">
                    {{ product.price }}
                  </td>
                  <td class="t-body-td">
                    <p v-if="product.is_enabled" class="text-lg text-green-600 font-bold">啟用</p>
                    <p v-else class="text-lg font-bold">未啟用</p>
                  </td>
                  <td class="t-body-td">
                    <button
                      class="t-btn-delete"
                      @click="openModal(product, 'deleteProduct')"
                      data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                    <button
                      @click="openModal(product, 'editProduct')"
                      data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      class="t-btn-edit">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      <ProductModal :product="productData" @update="update" :modalStatus="modalStatus"/>
      <PaginationBar :pagination="pagination" @handlePage="update"/>
  </div>
</template>
