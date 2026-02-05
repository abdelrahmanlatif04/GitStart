<script setup>
import Dialogue from "../components/ChatBot/Dialogue.vue";
import InputField from "../components/ChatBot/InputField.vue";
import { reactive } from "vue";
defineOptions({
  name: "Chatbot",
});
let messages = reactive([]);
function startQuestion(prompt) {
  messages.push({
    question: prompt,
    response: "<i>Mar3i is thinking...<i/>",
  });
  console.log(messages);
}
function clearChat() {
  while (messages.length) {
    messages.pop();
  }
}

function sendResponse(response) {
  messages[messages.length - 1].response = response;
}
</script>
<template>
  <div class="flex flex-col">
    <div class="flex-1"></div>
    <div class="w-full flex flex-col justify-center">
      <div class="w-full py-2.5">
        <div v-for="message in messages" :key="message">
          <Dialogue :role="'user'" :msg="message.question" />
          <Dialogue :role="'bot'" :msg="message.response" />
        </div>

        <InputField
          @start="startQuestion"
          @clear="clearChat"
          @end="sendResponse"
        />
      </div>
    </div>
  </div>
</template>
