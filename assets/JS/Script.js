//  function triggerSearch() {
//             const q = document.getElementById('searchInput').value;
//             alert(`🔍 កំពុងស្វែងរកពាក្យ៖ "${q || 'ទាំងអស់'}"... (Simulated Search Process)`);
//         }
//         function filterCards(type, btn) {
//             btn.parentElement.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
//             btn.classList.add('active');
//             document.querySelectorAll('.opportunity-item').forEach(i => {
//                 i.style.display = (type === 'all' || i.dataset.type === type) ? 'block' : 'none';
//             });
//         }
//         function filterCategory(t) {
//             document.getElementById('featured-section')?.scrollIntoView({ behavior: 'smooth' });
//             const g = document.querySelectorAll('.btn-group .btn');
//             filterCards(t === 'scholarship' ? 'scholarship' : 'job', g[t === 'scholarship' ? 2 : 1]);
//         }