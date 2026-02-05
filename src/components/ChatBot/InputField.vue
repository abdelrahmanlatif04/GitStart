<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const msg = ref(null);
const ableToSendPrompt = ref(true);

const emit = defineEmits(["start", "clear", "end"]);

async function sendPrompt() {
  const prompt = msg.value;
  if (!prompt) return;

  if (prompt === "clear()") {
    emit("clear");
    msg.value = null;
    return;
  }

  try {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = import.meta.env.VITE_URL;
    emit("start", prompt);
    msg.value = null;
    ableToSendPrompt.value = false;
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        model: "gpt-5-nano",
        input: `
            If input is not related to Git or version control, reply"I don't understand."
            Format output in HTML tags strong, i, break lines if needed.
            ${prompt}
              `,
      }),
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      emit("end", "Error in connection");
      return;
    }
    const data = await response.json();
    const text =
      data.output_text || data.output[1]["content"][0]["text"] || "No Response";
    emit("end", text);
    ableToSendPrompt.value = true;
  } catch (error) {
    emit("end", "Error connection the server");
  }
}
</script>
<template>
  <div class="my-2 flex px-2">
    <span class="relative h-fit">
      <span class="mx-3"> $ </span>
      <span
        class="absolute left-0 top-0 w-1 h-full rounded-l-full bg-white text-black"
      ></span>
    </span>
    <input
      placeholder="Enter your question"
      class="font-bold text-white flex-1 bg-[#010409] focus:outline-none"
      type="text"
      v-model="msg"
      @keypress="
        (e) => {
          if (e.key == 'Enter' && ableToSendPrompt) sendPrompt();
        }
      "
    />
    <button
      @click="sendPrompt()"
      class="hover:opacity-80 transition text-2xl cursor-pointer"
      :class="!ableToSendPrompt ? 'absolute' : ''"
      :disabled="!ableToSendPrompt"
    >
      <Icon v-if="ableToSendPrompt" icon="mdi:send-variant" />
    </button>
  </div>
</template>
