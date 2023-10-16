<template>
  <div class="item">
    <div class="company">
      <div class="frame-company"></div>
      <div class="title">Company name : {{companies.name}}</div>     
        <div class="places">SĐT: {{companies.phone}}</div>
      <button class="button">
        <div class="follow">
          <div class="btn-follow">Theo dõi</div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>    
export default {
  name: "ListCompanies",
  props: ["companies"],
};
</script>

<style>
</style>