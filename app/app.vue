<script setup lang="ts">
import Tutorial from "../components/tutorial.vue";
</script>
<template>
  <div
    style="
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      height: 90vh;
      place-items: center;
      position: relative;
      box-sizing: border-box;
      overflow-y: hidden;
    "
  >
    <div
      style="
        border: 1px solid black;
        border-radius: 10px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 5rem;
        height: 80%;
        overflow-y: auto;
        width: 100%;
        position: relative;
        box-sizing: border-box;
      "
    >
      <span
        style="
          font-size: 20px;
          background-color: black;
          color: white;
          padding: 1rem;
          border-radius: 10px;
          text-align: center;
        "
        >Demo Lottie Home_Header-20240229</span
      >
      <lottie-player
        autoplay
        loop
        src="/lotties/Home_Header-20240229.json"
        style="width: 100%; height: 500px"
      />
      <span
        style="
          font-size: 20px;
          background-color: black;
          color: white;
          padding: 1rem;
          border-radius: 10px;
          text-align: center;
        "
        >Demo Lottie zInsights</span
      >
      <lottie-player
        autoplay
        loop
        src="/lotties/zInsights.json"
        style="width: 100%; height: 500px"
      />
      <span
        style="
          font-size: 20px;
          background-color: black;
          color: white;
          padding: 1rem;
          border-radius: 10px;
          text-align: center;
        "
        >Demo Lottie zConnect-data_monitoring</span
      >
      <lottie-player
        autoplay
        loop
        src="/lotties/zConnect-data_monitoring.json"
        style="width: 100%; height: 500px"
      />
      <span
        style="
          font-size: 20px;
          background-color: black;
          color: white;
          padding: 1rem;
          border-radius: 10px;
          text-align: center;
        "
        >Demo Lottie ztreasury-transaction-mgmt</span
      >
      <lottie-player
        autoplay
        loop
        src="/lotties/ztreasury-transaction-mgmt.json"
        style="width: 100%; height: 500px"
      />
      <span
        style="
          font-size: 20px;
          background-color: black;
          color: white;
          padding: 1rem;
          border-radius: 10px;
          text-align: center;
        "
        >Demo Lottie zmonitor_-_collateral_and_margin</span
      >
      <lottie-player
        autoplay
        loop
        src="/lotties/zmonitor_-_collateral_and_margin.json"
        style="width: 100%; height: 500px"
      />
    </div>
    <div
      style="
        border: 1px solid black;
        border-radius: 10px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        height: 80%;
        width: 100%;
        position: relative;
        box-sizing: border-box;
      "
    >
      <span
        style="
          font-size: 20px;
          background-color: black;
          color: white;
          padding: 1rem;
          border-radius: 10px;
        "
        >Demo Storylane</span
      >
      <Tutorial />
    </div>
  </div>
</template>
