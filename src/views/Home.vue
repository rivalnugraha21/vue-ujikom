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
        <li class="font-bold md:mr-12"><a href="  ">Home</a></li>
        <li class="md:mr-12"><a href="/Produk">Produk</a></li>
        <li class="md:mr-12"><a href="/Kontak">Kontak</a></li>
        <li class="mt-2 sm:mt-0"><a
            class="whitespace-nowrap rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600"
            href="/login">Login</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header class="mx-auto max-w-screen-xl pt-45 text-center">
        <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">SELAMAT DATANG DI SWIFTERMACHINE SPAREPART</h1>
      </header>

      <div
        class="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-gray-400/60 py-32 text-center shadow-xl shadow-gray-300">
        <h1 class="mt-2 px-8 text-3xl font-bold text-black md:text-5xl">Suku Cadang Asli Dari Yang Ahli</h1>
        <p class="mt-6 text-lg text-black">menyediakan informasi suku cadang yang kalian butuhkan</p>
        <img class="absolute top-0 left-0 -z-10 h-full w-full object-cover"
          src="https://blog.moservice.id/wp-content/uploads/2023/08/tips-memilih-sparepart-motor-yang-original.jpg"
          alt="" />
      </div>


      <div class="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
        <center>
          <p class="mt-6 text-lg text-gray-700">Tentang </p>
        </center>
        <strong class="text-2xl font-medium">Sparepart sepeda motor adalah komponen-komponen penting yang
          memainkan peran kunci dalam perawatan, perbaikan, dan pemeliharaan sepeda motor. Dengan menggunakan
          sparepart yang tepat dan berkualitas, pemilik sepeda motor dapat memastikan bahwa kendaraan mereka
          tetap berkinerja optimal, aman, dan memiliki umur pakai yang panjang. Oleh karena itu, penting
          bagi pemilik sepeda motor untuk memahami jenis-jenis sparepart yang ada dan menjaga agar kendaraan
          mereka dalam kondisi yang baik dengan melakukan perawatan secara berkala.</strong>

        <p>Dengan adanya sistem informasi tentang spare part sepeda motor, industri perawatan dan
          perbaikan sepeda motor dapat mengalami peningkatan efisiensi yang signifikan. Hal ini tidak
          hanya menguntungkan pemilik bengkel dan toko spare part, tetapi juga meningkatkan
          pengalaman pelanggan secara keseluruhan. Dengan akses yang cepat dan akurat terhadap
          informasi tentang spare part, industri ini dapat terus berkembang dan menyediakan layanan
          yang lebih baik kepada konsumen.</p>

      </div>
    </article>
  </main>

  <div class="w-fit mx-auto mt-10 flex space-x-2">
    <div class="h-0.5 w-2 bg-gray-600"></div>
    <div class="h-0.5 w-32 bg-gray-600"></div>
    <div class="h-0.5 w-2 bg-gray-600"></div>
  </div>

  <section class="py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
      <!-- Heading -->
      <div class="relative mb-10 pt-8 md:mb-16">
        <h2 class="mb-4 text-center font-serif text-3xl font-bold text-black-900 md:mb-6 md:text-4xl">INFORMASI</h2>
        <center>
          <strong class="text-2xl font-medium">Pentingnya Sparepart Sepeda Motor</strong>
        </center>
      </div>
      <!-- /Heading -->
      <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
        <!-- Article -->
        <article class="relative select-none bg-grey-100 px-8 pt-10 pb-20 text-blue-900 shadow-md">
          <h1 class="text-sm uppercase">Perawatan yang Tepat</h1>
          <h1 class="text-lg font-semibold">Dengan menggunakan sparepart yang berkualitas, pemilik sepeda motor dapat
            memastikan
            bahwa kendaraan mereka tetap dalam kondisi baik dan berkinerja optimal</h1>

        </article>
        <!-- /Article -->
        <!-- Article -->
        <article class="relative select-none bg-grey-100 px-8 pt-10 pb-20 text-blue-900 shadow-md">
          <h1 class="text-sm uppercase">Keamanan Pengendara</h1>
          <h1 class="text-lg font-semibold">Menggunakan sparepart yang sesuai dan berfungsi dengan baik adalah
            kunci untuk menjaga keamanan pengendara dan penumpang</h1>

        </article>
        <!-- /Article -->

        <!-- Article -->
        <article class="relative select-none bg-grey-100 px-8 pt-10 pb-20 text-blue-900 shadow-md">
          <h1 class="text-sm uppercase">Peningkatan Umur Pakai Kendaraan</h1>
          <h1 class="text-lg font-semibold"> Dengan mengganti komponen yang aus atau rusak dengan tepat waktu, pemilik
            sepeda motor
            dapat memperpanjang umur pakai kendaraan mereka</h1>

        </article>
        <!-- /Article -->
      </div>
    </div>
  </section>
  <div class="w-fit mx-auto mt-10 flex space-x-2">
    <div class="h-0.5 w-2 bg-gray-600"></div>
    <div class="h-0.5 w-32 bg-gray-600"></div>
    <div class="h-0.5 w-2 bg-gray-600"></div>
  </div>


  <div class="mx-auto max-w-lg px-4 py-20 lg:max-w-screen-lg">
    <div class="mb-10">
      <center>
        <div class="mb-8 text-3xl font-medium leading-normal sm:text-4xl sm:leading-relaxed">Informasi modifikasi
          sparepart sepeda motor</div>
      </center>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div class="mr-4">
        <div class="mt-8 text-xl font-medium md:mt-0 md:mb-8 md:text-2xl">Perubahan Tampilan</div>
        <div class="text-gray-500">Salah satu jenis modifikasi yang umum dilakukan adalah perubahan tampilan. Ini bisa
          meliputi pemasangan fairing yang berbeda, ubahan grafis, penambahan lampu LED,
          atau bahkan pengecatan ulang untuk menciptakan penampilan yang lebih unik dan menarik</div>
      </div>
      <div class="mr-4">
        <div class="mt-8 text-xl font-medium md:mt-0 md:mb-8 md:text-2xl">Peningkatan Performa</div>
        <div class="text-gray-500"> Banyak pemilik sepeda motor melakukan modifikasi untuk meningkatkan performa mesin
          mereka. Ini bisa meliputi pemasangan knalpot aftermarket yang lebih bebas aliran,
          penggantian filter udara dengan jenis yang lebih baik,
          atau bahkan peningkatan mesin seperti bore-up atau penggantian camshaft</div>
      </div>
      <div class="mr-4">
        <div class="mt-8 text-xl font-medium md:mt-0 md:mb-8 md:text-2xl">Penambahan Aksesori</div>
        <div class="text-gray-500">Banyak pemilik sepeda motor juga memilih untuk menambahkan
          aksesori untuk meningkatkan fungsionalitas atau kenyamanan. Ini bisa mencakup pemasangan
          box atau carrier, windshield tambahan, pemanas handle grip, atau sistem navigasi</div>
      </div>
      <div class="mr-4">
        <div class="mt-8 text-xl font-medium md:mt-0 md:mb-8 md:text-2xl">Penyesuaian Ergonomis</div>
        <div class="text-gray-500">Modifikasi juga dapat dilakukan untuk meningkatkan kenyamanan
          dan ergonomi pengendara. Contohnya termasuk pemasangan setang yang lebih tinggi atau
          lebih rendah, penambahan footpeg yang lebih lebar, atau pemasangan jok yang lebih nyaman</div>
      </div>
    </div>
  </div>
  <div class="w-fit mx-auto mt-10 flex space-x-2">
    <div class="h-0.5 w-2 bg-gray-600"></div>
    <div class="h-0.5 w-32 bg-gray-600"></div>
    <div class="h-0.5 w-2 bg-gray-600"></div>
  </div>



  <aside aria-label="Related Articles" class="mx-auto mt-10 max-w-screen-xl py-20">
    <h2 class="mb-8 text-center text-5xl font-bold text-gray-900">INFORMASI PRODUK MODIFIKASI</h2>
    <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 300" version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="rgba(184.775, 184.775, 184.775, 1)" offset="0%"></stop>
          <stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)"
        d="M0,90L60,75C120,60,240,30,360,45C480,60,600,120,720,130C840,140,960,100,1080,90C1200,80,1320,100,1440,135C1560,170,1680,220,1800,225C1920,230,2040,190,2160,185C2280,180,2400,210,2520,220C2640,230,2760,220,2880,205C3000,190,3120,170,3240,170C3360,170,3480,190,3600,165C3720,140,3840,70,3960,65C4080,60,4200,120,4320,135C4440,150,4560,120,4680,115C4800,110,4920,130,5040,155C5160,180,5280,210,5400,185C5520,160,5640,80,5760,55C5880,30,6000,60,6120,100C6240,140,6360,190,6480,200C6600,210,6720,180,6840,145C6960,110,7080,70,7200,85C7320,100,7440,170,7560,210C7680,250,7800,260,7920,230C8040,200,8160,130,8280,125C8400,120,8520,180,8580,210L8640,240L8640,300L8580,300C8520,300,8400,300,8280,300C8160,300,8040,300,7920,300C7800,300,7680,300,7560,300C7440,300,7320,300,7200,300C7080,300,6960,300,6840,300C6720,300,6600,300,6480,300C6360,300,6240,300,6120,300C6000,300,5880,300,5760,300C5640,300,5520,300,5400,300C5280,300,5160,300,5040,300C4920,300,4800,300,4680,300C4560,300,4440,300,4320,300C4200,300,4080,300,3960,300C3840,300,3720,300,3600,300C3480,300,3360,300,3240,300C3120,300,3000,300,2880,300C2760,300,2640,300,2520,300C2400,300,2280,300,2160,300C2040,300,1920,300,1800,300C1680,300,1560,300,1440,300C1320,300,1200,300,1080,300C960,300,840,300,720,300C600,300,480,300,360,300C240,300,120,300,60,300L0,300Z">
      </path>
    </svg>

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
  </aside>
  <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 300" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop stop-color="rgba(184.775, 184.775, 184.775, 1)" offset="0%"></stop>
        <stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop>
      </linearGradient>
    </defs>
    <path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)"
      d="M0,90L60,75C120,60,240,30,360,45C480,60,600,120,720,130C840,140,960,100,1080,90C1200,80,1320,100,1440,135C1560,170,1680,220,1800,225C1920,230,2040,190,2160,185C2280,180,2400,210,2520,220C2640,230,2760,220,2880,205C3000,190,3120,170,3240,170C3360,170,3480,190,3600,165C3720,140,3840,70,3960,65C4080,60,4200,120,4320,135C4440,150,4560,120,4680,115C4800,110,4920,130,5040,155C5160,180,5280,210,5400,185C5520,160,5640,80,5760,55C5880,30,6000,60,6120,100C6240,140,6360,190,6480,200C6600,210,6720,180,6840,145C6960,110,7080,70,7200,85C7320,100,7440,170,7560,210C7680,250,7800,260,7920,230C8040,200,8160,130,8280,125C8400,120,8520,180,8580,210L8640,240L8640,300L8580,300C8520,300,8400,300,8280,300C8160,300,8040,300,7920,300C7800,300,7680,300,7560,300C7440,300,7320,300,7200,300C7080,300,6960,300,6840,300C6720,300,6600,300,6480,300C6360,300,6240,300,6120,300C6000,300,5880,300,5760,300C5640,300,5520,300,5400,300C5280,300,5160,300,5040,300C4920,300,4800,300,4680,300C4560,300,4440,300,4320,300C4200,300,4080,300,3960,300C3840,300,3720,300,3600,300C3480,300,3360,300,3240,300C3120,300,3000,300,2880,300C2760,300,2640,300,2520,300C2400,300,2280,300,2160,300C2040,300,1920,300,1800,300C1680,300,1560,300,1440,300C1320,300,1200,300,1080,300C960,300,840,300,720,300C600,300,480,300,360,300C240,300,120,300,60,300L0,300Z">
    </path>
  </svg>
</template>