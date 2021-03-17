<template>
  <div class="position">
    <div class="outside">
      <div class="rabbit">
        <div class="rabbit--head">
          <div class="rabbit--ears ears__left"></div>
          <div class="rabbit--ears ears__right"></div>
          <div class="rabbit--eyes eyes__left"></div>
          <div class="rabbit--eyes eyes__right"></div>
          <div class="rabbit--nose"></div>
          <div class="mouth">
            <div class="tooth"></div>
            <div class="tooth__right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.position {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.outside {
  position: absolute;
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 50%;
  animation: ro 3s infinite linear;
}
.rabbit {
  &--head {
    height: 55px;
    width: 65px;
    background-color: darkgray;
    border-radius: 50%;
    position: relative;
  }
  &--eyes {
    height: 4px;
    width: 4px;
    background-color: rgb(60, 60, 60);
    border-radius: 50%;
    position: absolute;
  }
  &--nose {
    height: 6px;
    width: 9px;
    background-color: gray;
    border-radius: 50% 50% 90% 90%;
    position: absolute;
    bottom: 25px;
    left: 28px;
  }
  &--ears {
    height: 50px;
    width: 16px;
    background-color: darkgray;
    border-radius: 50%;
    position: absolute;
  }
}
.ears {
  &__left {
    transform: rotate(-20deg);
    top: -30px;
    left: 13px;
  }
  &__right {
    transform: rotate(20deg);
    top: -30px;
    right: 15px;
  }
}
.eyes {
  &__left {
    left: 35%;
    top: 18px;
  }
  &__right {
    right: 35%;
    top: 18px;
  }
}
.mouth {
  width: 16px;
  height: 1px;
  background-color: white;
  position: absolute;
  bottom: 21px;
  left: 24px;
}
.tooth {
  width: 4px;
  height: 6px;
  background-color: white;
  position: absolute;
  left: 3px;
  border-radius: 20%;
  &__right {
    width: 5px;
    height: 6px;
    background-color: white;
    position: absolute;
    right: 3px;
    border-radius: 20%;
  }
}
@keyframes ro {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
