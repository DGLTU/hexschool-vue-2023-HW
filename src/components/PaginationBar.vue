<script setup>
import { defineProps, toRef } from 'vue';

const props = defineProps({
  pagination: Object,
});
const emits = defineEmits(['handlePage']);
const pagination = toRef(props, 'pagination');
const handlePage = (page) => {
  emits('handlePage', page);
};
const activePage = (page) => {
  let className = '';
  if (pagination.value.current_page === page) {
    className = 'page-active page-disabled';
  } else className = 'page';
  return className;
};
</script>

<template>
  <div class="pagination">
    <nav aria-label="Page navigation">
      <ul>
        <li>
          <a href="#" :class="(!pagination.has_pre) ? 'page-pre page-disabled' : 'page-pre'"
          @click.prevent="handlePage(pagination.current_page - 1)">上頁</a>
        </li>
        <template v-for="(page, index) in pagination.total_pages" :key="index">
          <li>
            <a href="#" :class="activePage(page)" @click.prevent="handlePage(page)">{{page}}</a>
          </li>
        </template>
        <li>
          <a href="#"
            :class="(!pagination.has_next) ? 'page-next page-disabled' : 'page-next'"
            @click.prevent="handlePage(pagination.current_page + 1)">下頁</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
