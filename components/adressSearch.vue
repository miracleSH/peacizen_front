<template>
  <div>
    <input-text
      v-model="postcode"
      :name="'우편번호'"
      :is-require="true"
      type="text"
      :rules="{ required: true }"
      placeholder="우편번호"
    >
      <template #icon>
        <div class="flex justify-center items-center absolute bg-gray-200 w-10 h-10 rounded-l-md border border-blue-400">
          <svg
            id="Livello_1"
            class="w-6 h-6"
            data-name="Livello 1"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path
              d="M116.73,31.83a3,3,0,0,0-4.2-.61L64.14,67.34a1,1,0,0,1-1.2,0L15.5,31.06a3,3,0,1,0-3.64,4.77L49.16,64.36,12.27,92.16A3,3,0,1,0,15.88,97L54.11,68.14l5.18,4a7,7,0,0,0,8.43.06l5.44-4.06L111.84,97a3,3,0,1,0,3.59-4.81L78.17,64.35,116.12,36A3,3,0,0,0,116.73,31.83Z"
            />
            <path
              d="M113,19H15A15,15,0,0,0,0,34V94a15,15,0,0,0,15,15h98a15,15,0,0,0,15-15V34A15,15,0,0,0,113,19Zm9,75a9,9,0,0,1-9,9H15a9,9,0,0,1-9-9V34a9,9,0,0,1,9-9h98a9,9,0,0,1,9,9Z"
            />
          </svg>
        </div>
      </template>
    </input-text>
    <input-text
      id="address"
      v-model="address"
      :is-require="true"
      :name="'주소'"
      type="text"
      :rules="{ required: true }"
      placeholder="주소"
    >
      <template #icon>
        <div
          class="flex justify-center items-center absolute bg-gray-200 w-10 h-10 rounded-l-md border border-blue-400"
        >
          <svg
            id="svg8"
            height="32"
            class="w-6 h-6"
            version="1.1"
            viewBox="0 0 8.4666665 8.4666669"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns:svg="http://www.w3.org/2000/svg"
          >
            <defs id="defs2" />
            <g id="layer1" transform="translate(0,-288.53332)">
              <path
                id="path929"
                d="m 4.2324219,288.79688 c -1.6042437,0 -2.9101556,1.30591 -2.9101563,2.91015 -10e-7,2.82277 2.7460938,4.96875 2.7460938,4.96875 a 0.26460978,0.26460978 0 0 0 0.3300781,0 c 0,0 2.7460996,-2.14598 2.7460937,-4.96875 -3.4e-6,-1.60424 -1.3078657,-2.91015 -2.9121093,-2.91015 z m 0,0.52929 c 1.3182605,0 2.3828097,1.0626 2.3828125,2.38086 4.8e-6,2.30926 -2.0910618,4.13374 -2.3808594,4.38086 -0.2884142,-0.24588 -2.3828134,-2.0707 -2.3828125,-4.38086 5e-7,-1.31826 1.0625988,-2.38086 2.3808594,-2.38086 z"
                style="
                  color: #000000;
                  font-style: normal;
                  font-variant: normal;
                  font-weight: normal;
                  font-stretch: normal;
                  font-size: medium;
                  line-height: normal;
                  font-family: sans-serif;
                  font-variant-ligatures: normal;
                  font-variant-position: normal;
                  font-variant-caps: normal;
                  font-variant-numeric: normal;
                  font-variant-alternates: normal;
                  font-feature-settings: normal;
                  text-indent: 0;
                  text-align: start;
                  text-decoration: none;
                  text-decoration-line: none;
                  text-decoration-style: solid;
                  text-decoration-color: #000000;
                  letter-spacing: normal;
                  word-spacing: normal;
                  text-transform: none;
                  writing-mode: lr-tb;
                  direction: ltr;
                  text-orientation: mixed;
                  dominant-baseline: auto;
                  baseline-shift: baseline;
                  text-anchor: start;
                  white-space: normal;
                  shape-padding: 0;
                  clip-rule: nonzero;
                  display: inline;
                  overflow: visible;
                  visibility: visible;
                  opacity: 1;
                  isolation: auto;
                  mix-blend-mode: normal;
                  color-interpolation: sRGB;
                  color-interpolation-filters: linearRGB;
                  solid-color: #000000;
                  solid-opacity: 1;
                  vector-effect: none;
                  fill: #000000;
                  fill-opacity: 1;
                  fill-rule: nonzero;
                  stroke: none;
                  stroke-width: 0.52916664;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 4;
                  stroke-dasharray: none;
                  stroke-dashoffset: 0;
                  stroke-opacity: 1;
                  paint-order: stroke fill markers;
                  color-rendering: auto;
                  image-rendering: auto;
                  shape-rendering: auto;
                  text-rendering: auto;
                  enable-background: accumulate;
                "
              />
              <path
                id="circle931"
                d="m 4.2324219,290.38477 c -0.7274912,0 -1.3222633,0.59477 -1.3222657,1.32226 -4.5e-6,0.7275 0.5947697,1.32422 1.3222657,1.32422 0.727496,0 1.3242233,-0.59672 1.3242187,-1.32422 -2.3e-6,-0.72749 -0.5967275,-1.32226 -1.3242187,-1.32226 z m 0,0.52929 c 0.4415089,0 0.7949204,0.35146 0.7949219,0.79297 2.7e-6,0.44151 -0.35341,0.79492 -0.7949219,0.79492 -0.441512,0 -0.7929715,-0.35341 -0.7929688,-0.79492 1.4e-6,-0.44151 0.3514598,-0.79297 0.7929688,-0.79297 z"
                style="
                  color: #000000;
                  font-style: normal;
                  font-variant: normal;
                  font-weight: normal;
                  font-stretch: normal;
                  font-size: medium;
                  line-height: normal;
                  font-family: sans-serif;
                  font-variant-ligatures: normal;
                  font-variant-position: normal;
                  font-variant-caps: normal;
                  font-variant-numeric: normal;
                  font-variant-alternates: normal;
                  font-feature-settings: normal;
                  text-indent: 0;
                  text-align: start;
                  text-decoration: none;
                  text-decoration-line: none;
                  text-decoration-style: solid;
                  text-decoration-color: #000000;
                  letter-spacing: normal;
                  word-spacing: normal;
                  text-transform: none;
                  writing-mode: lr-tb;
                  direction: ltr;
                  text-orientation: mixed;
                  dominant-baseline: auto;
                  baseline-shift: baseline;
                  text-anchor: start;
                  white-space: normal;
                  shape-padding: 0;
                  clip-rule: nonzero;
                  display: inline;
                  overflow: visible;
                  visibility: visible;
                  opacity: 1;
                  isolation: auto;
                  mix-blend-mode: normal;
                  color-interpolation: sRGB;
                  color-interpolation-filters: linearRGB;
                  solid-color: #000000;
                  solid-opacity: 1;
                  vector-effect: none;
                  fill: #000000;
                  fill-opacity: 1;
                  fill-rule: nonzero;
                  stroke: none;
                  stroke-width: 0.52916664;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 4;
                  stroke-dasharray: none;
                  stroke-dashoffset: 0;
                  stroke-opacity: 1;
                  paint-order: stroke fill markers;
                  color-rendering: auto;
                  image-rendering: auto;
                  shape-rendering: auto;
                  text-rendering: auto;
                  enable-background: accumulate;
                "
              />
            </g>
          </svg>
        </div>
      </template>
    </input-text>
    <input-text
      id="extraAddress"
      v-model="detail"
      :is-require="true"
      :name="'상세주소'"
      type="text"
      :rules="{ required: true }"
      placeholder="상세주소"
    >
      <template #icon>
        <div
          class="flex justify-center items-center absolute bg-gray-200 w-10 h-10 rounded-l-md border border-blue-400"
        >
          <svg
            id="svg8"
            height="32"
            class="w-6 h-6"
            version="1.1"
            viewBox="0 0 8.4666665 8.4666669"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns:svg="http://www.w3.org/2000/svg"
          >
            <defs id="defs2" />
            <g id="layer1" transform="translate(0,-288.53332)">
              <path
                id="path929"
                d="m 4.2324219,288.79688 c -1.6042437,0 -2.9101556,1.30591 -2.9101563,2.91015 -10e-7,2.82277 2.7460938,4.96875 2.7460938,4.96875 a 0.26460978,0.26460978 0 0 0 0.3300781,0 c 0,0 2.7460996,-2.14598 2.7460937,-4.96875 -3.4e-6,-1.60424 -1.3078657,-2.91015 -2.9121093,-2.91015 z m 0,0.52929 c 1.3182605,0 2.3828097,1.0626 2.3828125,2.38086 4.8e-6,2.30926 -2.0910618,4.13374 -2.3808594,4.38086 -0.2884142,-0.24588 -2.3828134,-2.0707 -2.3828125,-4.38086 5e-7,-1.31826 1.0625988,-2.38086 2.3808594,-2.38086 z"
                style="
                  color: #000000;
                  font-style: normal;
                  font-variant: normal;
                  font-weight: normal;
                  font-stretch: normal;
                  font-size: medium;
                  line-height: normal;
                  font-family: sans-serif;
                  font-variant-ligatures: normal;
                  font-variant-position: normal;
                  font-variant-caps: normal;
                  font-variant-numeric: normal;
                  font-variant-alternates: normal;
                  font-feature-settings: normal;
                  text-indent: 0;
                  text-align: start;
                  text-decoration: none;
                  text-decoration-line: none;
                  text-decoration-style: solid;
                  text-decoration-color: #000000;
                  letter-spacing: normal;
                  word-spacing: normal;
                  text-transform: none;
                  writing-mode: lr-tb;
                  direction: ltr;
                  text-orientation: mixed;
                  dominant-baseline: auto;
                  baseline-shift: baseline;
                  text-anchor: start;
                  white-space: normal;
                  shape-padding: 0;
                  clip-rule: nonzero;
                  display: inline;
                  overflow: visible;
                  visibility: visible;
                  opacity: 1;
                  isolation: auto;
                  mix-blend-mode: normal;
                  color-interpolation: sRGB;
                  color-interpolation-filters: linearRGB;
                  solid-color: #000000;
                  solid-opacity: 1;
                  vector-effect: none;
                  fill: #000000;
                  fill-opacity: 1;
                  fill-rule: nonzero;
                  stroke: none;
                  stroke-width: 0.52916664;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 4;
                  stroke-dasharray: none;
                  stroke-dashoffset: 0;
                  stroke-opacity: 1;
                  paint-order: stroke fill markers;
                  color-rendering: auto;
                  image-rendering: auto;
                  shape-rendering: auto;
                  text-rendering: auto;
                  enable-background: accumulate;
                "
              />
              <path
                id="circle931"
                d="m 4.2324219,290.38477 c -0.7274912,0 -1.3222633,0.59477 -1.3222657,1.32226 -4.5e-6,0.7275 0.5947697,1.32422 1.3222657,1.32422 0.727496,0 1.3242233,-0.59672 1.3242187,-1.32422 -2.3e-6,-0.72749 -0.5967275,-1.32226 -1.3242187,-1.32226 z m 0,0.52929 c 0.4415089,0 0.7949204,0.35146 0.7949219,0.79297 2.7e-6,0.44151 -0.35341,0.79492 -0.7949219,0.79492 -0.441512,0 -0.7929715,-0.35341 -0.7929688,-0.79492 1.4e-6,-0.44151 0.3514598,-0.79297 0.7929688,-0.79297 z"
                style="
                  color: #000000;
                  font-style: normal;
                  font-variant: normal;
                  font-weight: normal;
                  font-stretch: normal;
                  font-size: medium;
                  line-height: normal;
                  font-family: sans-serif;
                  font-variant-ligatures: normal;
                  font-variant-position: normal;
                  font-variant-caps: normal;
                  font-variant-numeric: normal;
                  font-variant-alternates: normal;
                  font-feature-settings: normal;
                  text-indent: 0;
                  text-align: start;
                  text-decoration: none;
                  text-decoration-line: none;
                  text-decoration-style: solid;
                  text-decoration-color: #000000;
                  letter-spacing: normal;
                  word-spacing: normal;
                  text-transform: none;
                  writing-mode: lr-tb;
                  direction: ltr;
                  text-orientation: mixed;
                  dominant-baseline: auto;
                  baseline-shift: baseline;
                  text-anchor: start;
                  white-space: normal;
                  shape-padding: 0;
                  clip-rule: nonzero;
                  display: inline;
                  overflow: visible;
                  visibility: visible;
                  opacity: 1;
                  isolation: auto;
                  mix-blend-mode: normal;
                  color-interpolation: sRGB;
                  color-interpolation-filters: linearRGB;
                  solid-color: #000000;
                  solid-opacity: 1;
                  vector-effect: none;
                  fill: #000000;
                  fill-opacity: 1;
                  fill-rule: nonzero;
                  stroke: none;
                  stroke-width: 0.52916664;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 4;
                  stroke-dasharray: none;
                  stroke-dashoffset: 0;
                  stroke-opacity: 1;
                  paint-order: stroke fill markers;
                  color-rendering: auto;
                  image-rendering: auto;
                  shape-rendering: auto;
                  text-rendering: auto;
                  enable-background: accumulate;
                "
              />
            </g>
          </svg>
        </div>
      </template>
    </input-text>
    <div class="w-full flex">
      <button
        class="w-44 bg-blue-400 rounded-md px-3 py-2 text-white font-bold hover:bg-blue-500 float-left"
        @click.prevent="execDaumPostcode"
      >
        우편번호 찾기
      </button>
    </div>
  </div>
</template>
<script>
import inputText from './input-text.vue'
export default {
  components: { inputText },
  data () {
    return {
      postcode: '',
      address: '',
      detail: ''
    }
  },
  watch: {
    detail () {
      this.$emit('change', {
        postcode: this.postcode,
        address: this.address,
        detail: this.detail
      })
    }
  },
  methods: {
    execDaumPostcode () {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.detail !== '') {
            this.detail = ''
          }
          if (data.userSelectedType === 'R') {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress
          }

          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === 'R') {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              this.detail += data.bname
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== '' && data.apartment === 'Y') {
              this.detail +=
                this.detail !== ''
                  ? `, ${data.buildingName}`
                  : data.buildingName
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.detail !== '') {
              this.detail = `(${this.detail})`
            }
          } else {
            this.detail = ''
          }
          // 우편번호를 입력한다.
          this.postcode = data.zonecode
          this.$emit('change', {
            postcode: this.postcode,
            address: this.address,
            detail: this.detail
          })
        }
      }).open()
    }
  }
}
</script>
<style></style>
