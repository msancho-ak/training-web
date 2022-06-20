<template>
    <div className="searchRegion">
        <div className="common-items-container_content">
            <input type="text" class="searchElement" :placeholder="PlaceHolder"/>
        </div>
    </div>
</template>

<script>
    export default {
        name:"SearchSection",
        props:["PlaceHolder"]
    }
</script>

<style scoped>
.searchElement {
    height: 35px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #e0dddd;
    border: 1px solid #e0dddd;
    border-radius: 5px;
    background: url(../assets/search.svg) no-repeat scroll 7px 7px;
    padding-left: 48px;
  }

</style>