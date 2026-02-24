// Article data for all 5 articles
const articles = {
  1: {
    title: "Paket Paintball Simulasi Tempur Batu",
    tag: "Paintball",
    date: "20 Feb 2026",
    readTime: "8 min",
    image: "images/paintball_tempur.png",
    imageAlt: "Paintball Simulasi Tempur di Hutan Pinus Batu",
    waText: "Halo%20Gemilang%20Katun%20Outbound%2C%20saya%20tertarik%20dengan%20Paket%20Paintball%20Simulasi%20Tempur%20Batu.%20Mohon%20info%20lebih%20lanjut."
  },
  2: {
    title: "EO Outbound Gathering Jatim Park",
    tag: "Gathering",
    date: "18 Feb 2026",
    readTime: "7 min",
    image: "images/gathering_jatimpark.png",
    imageAlt: "Gathering Perusahaan di Jatim Park",
    waText: "Halo%20Gemilang%20Katun%20Outbound%2C%20saya%20tertarik%20dengan%20EO%20Outbound%20Gathering%20Jatim%20Park.%20Mohon%20info%20lebih%20lanjut."
  },
  3: {
    title: "Outbound Team Bonding Perusahaan Malang",
    tag: "Team Bonding",
    date: "15 Feb 2026",
    readTime: "7 min",
    image: "images/team_bonding.png",
    imageAlt: "Team Bonding di Alam Terbuka Malang",
    waText: "Halo%20Gemilang%20Katun%20Outbound%2C%20saya%20tertarik%20dengan%20Outbound%20Team%20Bonding%20Perusahaan%20Malang.%20Mohon%20info%20lebih%20lanjut."
  },
  4: {
    title: "Paket Wisata Edukasi Dan Outbound Malang",
    tag: "Edukasi",
    date: "12 Feb 2026",
    readTime: "8 min",
    image: "images/wisata_edukasi.png",
    imageAlt: "Wisata Edukasi Siswa di Malang",
    waText: "Halo%20Gemilang%20Katun%20Outbound%2C%20saya%20tertarik%20dengan%20Paket%20Wisata%20Edukasi%20Dan%20Outbound%20Malang.%20Mohon%20info%20lebih%20lanjut."
  },
  5: {
    title: "Harga Paket Outbound Songgoriti Batu",
    tag: "Paket Harga",
    date: "10 Feb 2026",
    readTime: "7 min",
    image: "images/songgoriti_outbound.png",
    imageAlt: "Outbound Songgoriti Batu",
    waText: "Halo%20Gemilang%20Katun%20Outbound%2C%20saya%20tertarik%20dengan%20Harga%20Paket%20Outbound%20Songgoriti%20Batu.%20Mohon%20info%20lebih%20lanjut."
  }
};

function getNavHTML(activeArticle) {
  return `<nav class="sticky top-0 z-50 w-full border-b border-green-100 bg-white/90 backdrop-blur-md">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex justify-between items-center h-16">
<a href="index.html" class="flex items-center gap-2"><span class="material-symbols-outlined text-primary text-3xl">forest</span><span class="text-xl font-black tracking-tight text-slate-900">Gemilang<span class="text-primary">Outbound</span></span></a>
<div class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="index.html">Home</a>
<a class="text-sm font-semibold text-primary" href="blog.html">Blog</a>
<a class="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="index.html#layanan">Layanan</a>
<a class="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="index.html#kontak">Kontak</a>
<a href="https://wa.me/6282211221909" target="_blank" class="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-sm">Hubungi Kami</a>
</div>
<button onclick="document.getElementById('mob-menu').classList.toggle('open')" class="md:hidden"><span class="material-symbols-outlined text-slate-700 text-3xl">menu</span></button>
</div>
<div id="mob-menu" class="md:hidden pb-4" style="max-height:0;opacity:0;overflow:hidden;transition:all .3s">
<a class="block py-2.5 text-sm font-medium text-slate-600" href="index.html">Home</a>
<a class="block py-2.5 text-sm font-semibold text-primary" href="blog.html">Blog</a>
<a class="block py-2.5 text-sm font-medium text-slate-600" href="index.html#layanan">Layanan</a>
<a class="block py-2.5 text-sm font-medium text-slate-600" href="index.html#kontak">Kontak</a>
<a href="https://wa.me/6282211221909" target="_blank" class="mt-2 block text-center bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold">WhatsApp</a>
</div>
</div>
</nav>`;
}

// Mobile menu toggle for articles
document.addEventListener('DOMContentLoaded', function() {
  const mobMenu = document.getElementById('mob-menu');
  if (mobMenu) {
    // Fix inline style toggle
    document.querySelectorAll('[onclick]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (mobMenu.style.maxHeight === '0px' || mobMenu.style.maxHeight === '') {
          mobMenu.style.maxHeight = '400px';
          mobMenu.style.opacity = '1';
        } else {
          mobMenu.style.maxHeight = '0px';
          mobMenu.style.opacity = '0';
        }
      });
    });
  }
});
