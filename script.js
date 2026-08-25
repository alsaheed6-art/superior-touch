const products = [
  { name: 'Aso-oke agbada', category: 'Agbada', price: '$320', tag: 'New in', image: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/777800921_4448527418725748_4963109279327756984_n.jpg?stp=dst-jpg_tt6&cstp=mx1512x2048&ctp=s1512x2048&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Qr1x_j0NLqIQ7kNvwGxuQwd&_nc_oc=AdqBakMFpd5L9S8TtMmyihdl5fC3IZoqzuvnrHNV0spgsCffgCzFQB6_UYwPEbBMXt00sOBuHY1Qmx3zKGMba_FN&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=jFGh3g7RYwsMf29VvC7FlA&_nc_ss=7b2a8&oh=00_AQHOiIA2O_eWVZygpbAcF0MkGZjhnrB-3KeVMqWcs1m-tw&oe=6A9379F3' },
  { name: 'Royal blue agbada', category: 'Agbada', price: '$385', tag: 'New in', image: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/775261307_4447573148821175_178172188659968920_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Mcau22kKmuIQ7kNvwE9_RsT&_nc_oc=AdpS1cFEc90_DDXKNoQo9snsGdDc7slQOSCSLLZvgcJZGNYvHL2i8s1c-KF0aNhHKfxXAETWcIqaezDYvMTHGrSz&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=8moHyQORTcZ6_BHg0_Id4A&_nc_ss=7b2a8&oh=00_AQFLxDLg9ZFUoY4NlcYd_MEEW7M3BK4vFWqG0zed_VufiA&oe=6A936AFB' },
  { name: 'Ivory senator kaftan', category: 'Kaftans', price: '$180', tag: '', image: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/773647421_4442271349351355_8891354815245263405_n.jpg?stp=dst-jpg_tt6&cstp=mx1462x2048&ctp=s1462x2048&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vbpn1gyfqpgQ7kNvwFI9XAC&_nc_oc=Adr5KWahrHwj3riqgllx4Lo_Ff5fql-6IMVzd7Zo85e7z-5kXV93OKMQbseh3xXzCUe94Us8RqdUxDC0IYCW0YJ7&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=kzziFtmjI-gv7qpMnkJikg&_nc_ss=7b2a8&oh=00_AQGXdaLJlPrJb5sOdmDDZZoAjkhirV6eimSC-9jUWFWAqQ&oe=6A936E9B' },
  { name: 'Midnight kaftan', category: 'Kaftans', price: '$210', tag: '', image: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/749315217_4416987718546385_2672743991681410633_n.jpg?stp=dst-jpg_tt6&cstp=mx1586x2048&ctp=s1586x2048&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cDFcIpZoJcwQ7kNvwGO7Frd&_nc_oc=Adprc9eeLTWBxuQDWK1N6YSGFDiTAf92I-WCNkxr_DraaCrcGuMPp49ZYaHv60pmV4bQ7rI8tjVdj40DExjcmIR4&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=rWXHu-uDj_Jqp7sqgF0ySw&_nc_ss=7b2a8&oh=00_AQGX7AJEPp3owtg9xMLfZyoJe7chNGXkH1_H2ZjepZnQuQ&oe=6A936144' },
  { name: 'Embroidered grand agbada', category: 'Agbada', price: '$440', tag: 'Limited', image: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/750815016_4416987731879717_5967390754143525838_n.jpg?stp=dst-jpg_tt6&cstp=mx1462x2048&ctp=s1462x2048&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=y1gP7U0gzCgQ7kNvwHG-m3D&_nc_oc=AdrxBC44v-B5hn11MytVPBE9BXPotCQn2qpvniEn_NpTxw-ek9hXCD1fYxGnJmmzVNDqsIbHhAOIX8irzS_zm3wv&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=rje2AYKpqE1k1oTYtNPyOA&_nc_ss=7b2a8&oh=00_AQE6fwZp4cEAHD6jT-P4EYImuctE2hpbvLXzHxDNAkSF2w&oe=6A934BC6' },
  { name: 'Sandstone kaftan', category: 'Kaftans', price: '$165', tag: '', image: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/749301191_4415137828731374_4354892267068577318_n.jpg?stp=dst-jpg_tt6&cstp=mx1352x2048&ctp=s1352x2048&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=S75L_bJXdjsQ7kNvwGkyXSN&_nc_oc=AdqaDGcr-bSrbUh_IpBrPaqodQ5LNphmrUNZpnVlbmjyH6BXsYVeeGSW03pvZhS_mhXKUjhDplhCSRr0G3Cmc68Z&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=p9IcjyKgecQ_cuKnvfWLjQ&_nc_ss=7b2a8&oh=00_AQEMjnbMq8q6fSqP1gSG1kyhepODCacHHNk1mDhmPxS5nw&oe=6A9347D8' },
  { name: 'Olive occasion agbada', category: 'Agbada', price: '$350', tag: '', image: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/744295337_4407856522792838_5282652508790777856_n.jpg?stp=dst-jpg_tt6&cstp=mx1288x2048&ctp=s1288x2048&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wSJuxOJ_VTsQ7kNvwFLW-P9&_nc_oc=AdoL_-zfhtCHkaTg1Teol6QJhLpxF-XYNMIltwnvBjPO_KwuyBLCMuy7F1f6b1s2oXQJmuVGmVIMD5mVGHOKbl8H&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=VbqUUgOOYcfyu450K5851Q&_nc_ss=7b2a8&oh=00_AQHblVE7dj4tbw8Rw73uJhKRpZmrXU2_iM6Gxbx_oSLaWA&oe=6A936CC3' },
  { name: 'Cocoa linen kaftan', category: 'Kaftans', price: '$195', tag: '', image: 'https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/696291770_4345861255659032_8904427561318754552_n.jpg?stp=dst-jpg_tt6&cstp=mx1152x2048&ctp=s1152x2048&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=N6vGH0QU-0YQ7kNvwFJkmyr&_nc_oc=Adp_rNOpe4mgiWM4KN2bV5lr_NNyPCckwq56NDoJ7twoJgsAR6_PQ488NiuGv_UbkfqE2T60VDOWoizfZLHraSXM&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=NUjbxPHdl-i_wDdqaUL4HA&_nc_ss=7b2a8&oh=00_AQFq_7hBg_gTZrS3XveLe3xdPOEtOTu3H32ZNgZVNB5Hrg&oe=6A937833' }
];

const grid = document.querySelector('#product-grid');
const emptyState = document.querySelector('.empty-state');
const bagCount = document.querySelector('.bag-count');
let bag = 0;

function renderProducts(filter = 'All') {
  const visibleProducts = filter === 'All' ? products : products.filter(product => product.category === filter || product.tag === filter);
  grid.innerHTML = visibleProducts.map((product, index) => `
    <article class="product-card" style="animation-delay:${index * 60}ms">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
        <button class="quick-add" data-product="${product.name}" aria-label="Add ${product.name} to bag">+</button>
      </div>
      <div class="product-info"><div><div class="product-name">${product.name}</div><div class="product-meta">${product.category}</div></div><div class="product-price">${product.price}</div></div>
    </article>`).join('');
  emptyState.hidden = visibleProducts.length > 0;
}

function setFilter(filter) {
  document.querySelectorAll('.filter').forEach(button => button.classList.toggle('active', button.dataset.filter === filter));
  renderProducts(filter);
  document.querySelector('#shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));
document.querySelectorAll('[data-filter-link]').forEach(link => link.addEventListener('click', () => setFilter(link.dataset.filterLink)));
grid.addEventListener('click', event => {
  const button = event.target.closest('.quick-add');
  if (!button) return;
  bag += 1;
  bagCount.textContent = bag;
  const toast = document.querySelector('.toast');
  toast.textContent = `${button.dataset.product} added to your bag`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
});

const searchPanel = document.querySelector('.search-panel');
document.querySelector('.search-toggle').addEventListener('click', () => { searchPanel.classList.add('open'); searchPanel.setAttribute('aria-hidden', 'false'); searchPanel.querySelector('input').focus(); });
document.querySelector('.close-search').addEventListener('click', () => { searchPanel.classList.remove('open'); searchPanel.setAttribute('aria-hidden', 'true'); });
searchPanel.querySelector('input').addEventListener('input', event => {
  const query = event.target.value.toLowerCase();
  const matches = products.filter(product => product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query));
  searchPanel.querySelector('.search-result').textContent = query ? `${matches.length} piece${matches.length === 1 ? '' : 's'} found` : '';
});

document.querySelector('.menu-toggle').addEventListener('click', event => {
  const nav = document.querySelector('.main-nav');
  const expanded = event.currentTarget.getAttribute('aria-expanded') === 'true';
  event.currentTarget.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open');
});
document.querySelector('.signup-form').addEventListener('submit', event => { event.preventDefault(); event.currentTarget.nextElementSibling.textContent = 'You are on the list. See you soon.'; event.currentTarget.reset(); });

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
renderProducts();
