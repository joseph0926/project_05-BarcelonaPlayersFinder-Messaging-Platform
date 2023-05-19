<template>
  <header class="nav">
    <div class="left">Barcelona</div>
    <nav class="right">
      <RouterLink to="/player">Players</RouterLink>
      <RouterLink to="/request">Request</RouterLink>
    </nav>
    <div class="ham">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  </header>
  <nav class="mob-nav">
    <RouterLink to="/player">Players</RouterLink>
    <RouterLink to="/request">Request</RouterLink>
  </nav>
</template>

<style scoped>
header {
  width: 100vw;
  background: rgba(171, 121, 121, 0.2);
}
.nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 30px;
}
.nav .left {
  font-size: 32px;
  font-weight: bold;
}
.nav .right {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav .right a {
  color: #633838;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1.05rem;
  font-weight: bold;
  border: 1px solid transparent;
  transition: all 0.1s;
}

.nav .right a:active,
.nav .right a:hover,
.nav .right a.router-link-active {
  border: 3px solid #dc8a8a;
}

.nav .ham {
  height: 50px;
  width: 50px;
  display: none;
}

.bar1,
.bar2,
.bar3 {
  background: #000;
  height: 4px;
  width: 36px;
  margin: 3px;
  border-radius: 10px;
}

.bar1Anim {
  animation: flipbar1 1s;
  animation-fill-mode: forwards;
}
.bar2Anim {
  animation: fadebar 1s;
  animation-fill-mode: forwards;
}
.bar3Anim {
  animation: flipbar3 1s;
  animation-fill-mode: forwards;
}

.mob-nav {
  position: fixed;
  top: 114px;
  z-index: 2;
  right: -80px;
  width: 80px;
  background-color: rgba(255, 255, 255, 0.7);
  height: calc(100vh - 114px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
}

.showSide {
  transform: translateX(-80px);
}

@media only screen and (max-width: 740px) {
  .nav {
    position: sticky;
    top: 0;
    padding: 32px 20px;
    z-index: 2;
    background: rgba(255, 255, 255, 0.7);
  }
  .nav .right {
    display: none;
  }
  .nav .ham {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}

@keyframes fadebar {
  from {
    transform: scaleX(1);
    opacity: 1;
  }
  to {
    transform: scaleX(0);
    opacity: 0;
  }
}
@keyframes flipbar1 {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(45deg) translate(4px, 10px);
  }
}
@keyframes flipbar3 {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-45deg) translate(4px, -10px);
  }
}
</style>
