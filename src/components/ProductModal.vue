<script setup>
import 'tw-elements';

defineProps({
  product: Object,
});
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
    <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
      <div
        class="
          modal-content
          border-none
          shadow-lg
          relative
          flex flex-col
          w-full
          pointer-events-auto
          bg-white bg-clip-padding
          rounded-md
          outline-none
          text-current
        "
      >
        <div
          class="
            modal-header
            flex flex-shrink-0
            items-center
            justify-between
            p-4
            border-b border-gray-200
            rounded-t-md
          "
        >
          <h5
            class="flex items-center text-4xl font-medium leading-normal text-gray-800"
            id="exampleModalLabel"
          >
            {{product.title}}
            <span class="ml-4 p-1 text-sm border rounded bg-pink-300">{{product.category}}</span>
          </h5>
          <button
            type="button"
            class="
              btn-close
              box-content
              w-4
              h-4
              p-1
              text-black
              border-none
              rounded-none
              opacity-50
              focus:shadow-none focus:outline-none focus:opacity-100
              hover:text-black hover:opacity-75 hover:no-underline
            "
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body relative p-4">
          <div class="flex">
            <img :src="product.imageUrl" class="w-1/2 h-auto" alt="">
            <div class="ml-8 product-text">
              <p class="mt-4">商品描述：{{product.description}}</p>
              <p class="mt-4">商品內容：尺寸：{{product.content}}</p>
              <p class="mt-4">{{product.price}}
                  <span class="line-through">{{product.origin_price}}</span> / 元</p>
            </div>
          </div>
          <div class="img-group mt-8 flex">
            <div class="w-[35%] mr-4" v-for="img in product.imagesUrl" :key="img">
              <img :src="img" class="object-cover" alt="">
            </div>
          </div>
        </div>
        <div
          class="
            modal-footer
            flex flex-shrink-0 flex-wrap
            items-center
            justify-end
            p-4
            border-t border-gray-200
            rounded-b-md
          "
        >
        </div>
      </div>
    </div>
  </div>
</template>
