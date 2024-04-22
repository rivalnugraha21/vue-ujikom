<template>
  <header
    class="text-slate-700 relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
    <a href="" class="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black">
      <span class="mr-2 text-4xl text-cyan-500">
        <div class="w-20">
          <img
            src="https://img.freepik.com/free-vector/vector-motorcycle-engine-with-wings-illustration_1284-43392.jpg?t=st=1708931353~exp=1708934953~hmac=6b93cd6352e1974a37905e30f2370ffb09675569edb9ac5fec8cad50da9ff04e&w=826"
            alt="" class="" />
        </div>
      </span>
      SwifterMachine
    </a>
    <input type="checkbox" class="peer hidden" id="navbar-open" />
    <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
      <span class="sr-only">Toggle Navigation</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label>
    <nav aria-label="Header Navigation"
      class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
      <ul class="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        <li class="font-bold md:mr-12"><a href="/">Home</a></li>
        <li class="md:mr-12"><a href="Kontak">Kontak</a></li>
      </ul>
    </nav>
  </header>

  <div class="relative mb-10 pt-8 md:mb-16">
    <h2 class="mb-4 text-center font-serif text-3xl font-bold text-black-900 md:mb-6 md:text-4xl">PRODUK</h2>
  </div>
    <div class="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3">
      <article
        class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
        <a href="">
          <img
            src="https://media.karousell.com/media/photos/products/2023/9/3/vnd_velg_racing_v_speed_1693758970_d33fe1b7_progressive.jpg"
            class="h-56 w-full object-cover" alt="" />
          <div class="flex-auto px-6 py-5">
            <span class="mb-2 flex items-center text-sm font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
              </svg>
            </span>
            <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">VELG VND V SPEED</h3>
            <p class="mb-4 text-base font-light">Velg VND V Speed desain menarik nan elegan berbentuk bintang, finishing
              lebih rapi terdapat beberapa pilihan warna yang menarik. Build quality cukup kokoh dengan berat total velg
              kurang lebih 7,26 kg dan ukuran velg depan 185x14 dan belakang 215x14.. ●KEUNGGULAN: -Ber-SNI No.
              4658:2008, ISO 9001</p>

          </div>
        </a>
      </article>

      <article
        class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
        <a href="">
          <img
            src="https://cekbarang.id/image/aHR0cHM6Ly9jZi5zaG9wZWUuY28uaWQvZmlsZS81YmY5ZTdjYTdmODk2NGU0ZGNhZjVjYzA0NzdjYzA2MF90bg==.png"
            class="h-56 w-full object-cover" alt="" />
          <div class="flex-auto px-6 py-5">
            <span class="mb-2 flex items-center text-sm font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">

              </svg>
            </span>
            <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">SHOCKBREAKER KTC</h3>
            <p class="mb-4 text-base font-light"> Shockbreaker KTC dirancang dengan presisi untuk menghadapi tantangan
              berat dari berbagai kondisi jalan. Ketika mengemudi di jalan yang bergelombang, berlubang, atau berbatu,
              peran shockbreaker ini sangat penting dalam menjaga stabilitas kendaraan. Dengan penggunaan shockbreaker
              KTC, pengemudi dan penumpang akan merasakan perbedaan signifikan dalam hal kenyamanan dan kestabilan. </p>

          </div>
        </a>
      </article>

      <article
        class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
        <a href="">
          <img src="https://down-id.img.susercontent.com/file/id-11134601-23030-5e31rqmrmtovfe"
            class="h-56 w-full object-cover" alt="" />
          <div class="flex-auto px-6 py-5">
            <span class="mb-2 flex items-center text-sm font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">

              </svg>
            </span>
            <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">KNALPOT TZM PROJECT</h3>
            <p class="mb-4 text-base font-light">Knalpot TZM biasanya terbuat dari bahan logam seperti stainless steel
              atau aluminium. Desainnya didesain untuk meningkatkan performa mesin dengan mengoptimalkan aliran gas
              buang. Salah satu daya tarik utama knalpot TZM adalah suara yang dihasilkannya. Harga knalpot TZM bisa
              bervariasi tergantung pada merek, desain, dan material. Knalpot aftermarket umumnya memiliki harga yang
              lebih terjangkau dibandingkan dengan knalpot bawaan pabrik (OEM)</p>
          </div>
        </a>
      </article>

      <article
        class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
        <a href="">
          <img
            src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-105322897/michelin_paket_ban_motor_michelin_pilot_moto_gp_-90-80-14-_-100-80-14-_tubless_ban_motor_matic_vario_beat_scoopy_mio_full02_en6bmjhs.png"
            class="h-56 w-full object-cover" alt="" />
          <div class="flex-auto px-6 py-5">
            <span class="mb-2 flex items-center text-sm font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">

              </svg>
            </span>
            <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">BAN MICHELIN MOTO GP </h3>
            <p class="mb-4 text-base font-light"> Ban Michelin dirancang untuk memberikan performa yang optimal di
              berbagai kondisi lintasan, termasuk trek kering dan basah. Mereka harus mampu memberikan cengkeraman yang
              baik, stabilitas, dan responsif saat melewati tikungan atau akselerasi di trek lurus. </p>
          </div>
        </a>
      </article>

      <article
        class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
        <a href="">
          <img
            src="https://cdn.idntimes.com/content-images/post/20220228/screenshot-2022-02-28-at-15-39-58-tdr-acceleration-package-zozz-for-fazzio-125-e9c1ff1f42aa68ec42ca231abd38d608.png"
            class="h-56 w-full object-cover" alt="" />
          <div class="flex-auto px-6 py-5">
            <span class="mb-2 flex items-center text-sm font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">

              </svg>
            </span>
            <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">PAKET CVT MOTOR</h3>
            <p class="mb-4 text-base font-light"> Paket CVT motor dapat menjadi solusi yang praktis dan ekonomis untuk
              meningkatkan kinerja atau melakukan perawatan pada sistem transmisi CVT sepeda motor. Namun, pemilihan
              paket yang tepat dan pemasangan yang benar sangatlah penting untuk memastikan hasil yang diinginkan dan
              menjaga integritas sistem transmisi motor Anda
            </p>

          </div>
        </a>
      </article>

      <article
        class="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
        <a href="">
          <img src="https://assets2.rumah-bumn.id/produk/product-15216076253435.jpg" class="h-56 w-full object-cover"
            alt="" />
          <div class="flex-auto px-6 py-5">
            <span class="mb-2 flex items-center text-sm font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">

              </svg>
            </span>
            <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">OLI MOTOR</h3>
            <p class="mb-4 text-base font-light"> Oli motor adalah salah satu elemen penting dalam menjaga performa dan
              umur pakai mesin sepeda motor. Memilih oli yang tepat dan merawatnya dengan baik merupakan langkah penting
              dalam memastikan kesehatan dan kinerja mesin Anda. </p>

          </div>
        </a>
      </article>
    </div>
</template>