<script setup>
import { toRef } from 'vue';
import { editProductApi, newProductApi, delProductApi } from '../js/api';
import 'tw-elements';

const props = defineProps({
  product: Object,
  modalStatus: String,
});
const emit = defineEmits(['update']);
const productTemp = toRef(props, 'product');
const modalStatus = toRef(props, 'modalStatus');
let imgUrl = '';

const addImage = (img) => {
  if (img !== '') {
    if (productTemp.value.imagesUrl) {
      productTemp.value.imagesUrl.push(img);
      imgUrl = '';
    } else {
      productTemp.value.imagesUrl = [];
      productTemp.value.imagesUrl.push(img);
      imgUrl = '';
    }
  }
};
const delImage = (index) => {
  productTemp.value.imagesUrl.splice(index, 1);
};
const isEmpty = () => {
  const titleStatus = (productTemp.value.title === undefined);
  const categoryStatus = (productTemp.value.category === undefined);
  const unitStatus = (productTemp.value.unit === undefined);
  const priceStatus = (productTemp.value.price === undefined && typeof (productTemp.value.price) === 'number');
  const originPriceStatus = (productTemp.value.origin_price === undefined && typeof (productTemp.value.origin_price) === 'number');
  const descriptionStatus = (productTemp.value.description === undefined);
  const contentStatus = (productTemp.value.content === undefined);
  const imageStatus = (productTemp.value.imageUrl === undefined);
  return ((titleStatus || categoryStatus || unitStatus || priceStatus || originPriceStatus
  || descriptionStatus || contentStatus || imageStatus));
};
const editProduct = (data, id) => {
  editProductApi({ data }, id)
    .then(() => {
      alert('產品更新成功');
      emit('update');
    })
    .catch((err) => {
      console.log(err);
    });
};
const newProduct = (data) => {
  if (!isEmpty()) {
    newProductApi({ data })
      .then((res) => {
        console.log(res);
        alert('產品新增成功!');
        emit('update');
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    alert('請填寫完整資訊');
  }
};
const delProduct = (id) => {
  delProductApi(id)
    .then(() => {
      alert('刪除成功');
      emit('update');
    })
    .catch((err) => console.log(err));
};

</script>

<template>
 <div
    class="
      modal
      fade
      fixed
      top-0
      left-0
      hidden
      w-full
      h-full
      outline-none
      overflow-x-hidden overflow-y-auto
    "
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div v-if="modalStatus!=='deleteProduct'"
        class="modal-dialog modal-xl relative w-auto pointer-events-none">
      <div
        class="mod al-content productModal-content">
        <div
          class="modal-header productModal-header">
          <h5
            class="productModal-header-h5"
            id="exampleModalLabel"
            v-if="modalStatus==='editProduct'"
          >
            編輯產品
          </h5>
          <h5
            class="productModal-header-h5"
            id="exampleModalLabel"
            v-else-if="modalStatus==='newProduct'"
          >
            新增產品
          </h5>
          <button
            type="button"
            class="productModal-btn-close text-gray-200"
            data-bs-dismiss="modal"
            aria-label="Close"
          ><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="modal-body relative p-4">
          <div class="grid grid-cols-3 gap-4">
            <div>
              <label for="js-imageUrl" class="productModal-label">主圖網址:</label>
                <input class="productModal-input"
                      v-model="productTemp.imageUrl"
                      id="js-imageUrl">
              <img :src="productTemp.imageUrl" alt="" class="w-1/2 mt-4">
              <div class="productModal-image-group">
              <h1 class="text-4xl">新增圖片</h1>
              <div class="grid grid-flow-col gap-4">
                <input type="text" class="productModal-input" v-model="imgUrl">
                <div class="flex">
                  <button type="button" class="btn-primary" @click="addImage(imgUrl)">新增</button>
                </div>
              </div>
              <div v-for="(img, i) in productTemp.imagesUrl" :key="img">
                <div class="mt-4 flex justify-end">
                  <button type="button" @click="delImage(i)">
                    <i class="fa-solid fa-xmark text-2xl"></i>
                  </button>
                </div>
                <img :src="img" class="object-cover" alt="">
              </div>
            </div>
            </div>
            <div class="col-span-2">
              <div class="col-span-2">
                <label for="js-title" class="productModal-label">商品名稱:</label>
                <input class="productModal-input"
                      v-model="productTemp.title"
                      id="js-title">
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label for="js-category" class="productModal-label">分類:</label>
                  <input class="productModal-input"
                        v-model="productTemp.category"
                        id="js-category">
                </div>
                <div>
                  <label for="js-unit" class="productModal-label">單位:</label>
                  <input class="productModal-input"
                        v-model="productTemp.unit"
                        id="js-unit">
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label for="js-price" class="productModal-label">售價:</label>
                  <input type="number" min="0"
                        class="productModal-input"
                        v-model.number="productTemp.price"
                        id="js-price">
                </div>
                <div>
                  <label for="js-origin-price" class="productModal-label">原價:</label>
                  <input type="number" min="0"
                        class="productModal-input"
                        v-model.number="productTemp.origin_price"
                        id="js-origin-price">
                </div>
              </div>
              <div class="col-span-2 w-full my-4 h-[1px] content-none bg-slate-200 "></div>
              <div class="col-span-2">
                <label for="js-description" class="productModal-label">商品敘述:</label>
                <textarea class="productModal-input"
                      v-model="productTemp.description"
                      id="js-description" rows="5">
                </textarea>
              </div>
              <div class="col-span-2">
                <label for="js-content" class="productModal-label">說明內容：</label>
                <input class="productModal-input"
                      v-model="productTemp.content"
                      id="js-content">
              </div>
              <label for="js-isEnabled" class="productModal-label">是否啟用：</label>
                <input type="checkbox"
                      class="productModal-input-checkbox"
                      v-model="productTemp.is_enabled"
                      :true-value="1"
                      :false-value="0"
                      id="js-isEnabled">
            </div>
          </div>
        </div>
        <div class="modal-footer productModal-footer">
          <button
            type="button"
            class="btn-primary-cancel"
            data-bs-dismiss="modal"
            aria-label="Close"
          >取消</button>
          <button
          type="button"
          class="ml-4 btn-primary"
          v-if="modalStatus==='editProduct'"
            @click="editProduct(productTemp, productTemp.id)" data-bs-dismiss="modal">確認編輯</button>
          <button
          type="button"
          class="ml-4 btn-primary"
          v-else-if="modalStatus==='newProduct'"
          @click="newProduct(productTemp)">確認新增</button>
        </div>
      </div>
    </div>
    <div v-else-if="modalStatus==='deleteProduct'"
      class="modal-dialog modal-base relative w-auto pointer-events-none">
      <div
        class="mod al-content productModal-content">
        <div
          class="modal-header productModal-header-delete">
          <h5
            class="productModal-header-h5"
            id="exampleModalLabel">
            刪除產品
          </h5>
          <button
            type="button"
            class="productModal-btn-close text-gray-200"
            data-bs-dismiss="modal"
            aria-label="Close"
          ><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="modal-body relative p-4">
          確認刪除 {{productTemp.title}} ?
        </div>
        <div class="modal-footer productModal-footer">
          <button
            type="button"
            class="btn-primary-cancel"
            data-bs-dismiss="modal"
            aria-label="Close"
          >取消</button>
          <button
            type="button"
            class="ml-4 t-btn-delete"
            @click="delProduct(productTemp.id)" data-bs-dismiss="modal">確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
