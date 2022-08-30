<template>
  <div>
    <div class="flex flex-row gap-3 fixed right-0 mr-4 mt-4">
      <nuxt-link to="/login">
        <span class="font-medium text-sm text-gray-400 hover:text-gray-600">로그인</span>
      </nuxt-link>
      <nuxt-link to="/register">
        <span class="font-medium text-sm text-gray-400 hover:text-gray-600">회원가입</span>
      </nuxt-link>
    </div>
    <div class="flex flex-row justify-center mb-8">
      <nuxt-link to="/">
        <img src="../static/logo.png">
      </nuxt-link>
      <ul
        class="flex flex-row gap-5 cursor-pointer my-auto ml-28 text-center text-lg text-gray-800 font-bold"
      >
        <li class="hover:bg-gray-200 px-2 py-2 rounded-md">
          <nuxt-link to="/introduce">
            평화통일 시민행동은
          </nuxt-link>
        </li>
        <li class="hover:bg-gray-200 px-2 py-2 rounded-md">
          <nuxt-link to="/login">
            정기 후원
          </nuxt-link>
        </li>
        <li class="hover:bg-gray-200 px-2 py-2 rounded-md">
          <nuxt-link to="/activity">
            활동 소식
          </nuxt-link>
        </li>
        <li class="hover:bg-gray-200 px-2 py-2 rounded-md">
          <nuxt-link to="/seminar">
            강연회
          </nuxt-link>
        </li>
        <li class="hover:bg-gray-200 px-2 py-2 rounded-md">
          <nuxt-link to="/study">
            연구소모임
          </nuxt-link>
        </li>
        <li class="hover:bg-gray-200 px-2 py-2 rounded-md">
          <a href="https://www.youtube.com/channel/UCZt-1PiEY-6736W_buoBwAw">
            수요평화뉴스
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderLayout'
}
</script>

<style></style>
