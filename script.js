/* ===================================================================
   STATE (in-memory demo data — resets on page reload)
=================================================================== */
const state = {
  user: null,
  pets: [
    { id: 'p1', name: 'Bumi', species: 'Dog', breed: 'Shih Tzu', age: '3 years', notes: 'Due for annual booster in August.' },
    { id: 'p2', name: 'Momo', species: 'Cat', breed: 'Persian', age: '1 year', notes: 'Mild dust allergy — avoid grooming powders.' }
  ],
  vets: [
    { id: 'v1', name: 'Dr. Amara Chowdhury', specialty: 'Small Animal Medicine', exp: '8 yrs experience' },
    { id: 'v2', name: 'Dr. Rafiq Hasan', specialty: 'Surgery', exp: '12 yrs experience' },
    { id: 'v3', name: 'Dr. Nusrat Jahan', specialty: 'Dermatology', exp: '5 yrs experience' },
    { id: 'v4', name: 'Dr. Imran Kabir', specialty: 'Dentistry', exp: '6 yrs experience' }
  ],
  services: [
    { name: 'Wellness Checkup', price: 800, desc: 'A full nose-to-tail health review.', icon: '🩺' },
    { name: 'Vaccination', price: 600, desc: 'Core and lifestyle vaccines, on schedule.', icon: '💉' },
    { name: 'Grooming', price: 1200, desc: 'Bath, trim and nail care.', icon: '🛁' },
    { name: 'Dental Cleaning', price: 1800, desc: 'Plaque removal under close monitoring.', icon: '🦷' },
    { name: 'Surgery Consultation', price: 1000, desc: 'Assessment and planning before any procedure.', icon: '🏥' },
    { name: 'Emergency Care', price: 2500, desc: "Priority care when it can't wait.", icon: '🚨' },
    { name: 'Spay / Neuter', price: 3200, desc: 'Safe sterilisation with post-op guidance.', icon: '🩹' },
    { name: 'Microchipping', price: 900, desc: 'A lifetime ID, in case they wander off.', icon: '📍' },
    { name: 'Deworming', price: 450, desc: 'Routine parasite prevention and control.', icon: '🪱' },
    { name: 'Nutrition Consultation', price: 700, desc: 'A diet plan built around their breed and age.', icon: '🥗' },
    { name: 'Senior Pet Care', price: 1400, desc: 'Extra-gentle checkups for older companions.', icon: '🦴' },
    { name: 'Boarding (per night)', price: 950, desc: "A comfy stay when you're away.", icon: '🏡' }
  ],
  appointments: [
    { id: 'a1', petId: 'p1', vetId: 'v1', date: nextWeekday(3), time: '11:00', reason: 'Annual booster', status: 'upcoming' }
  ],
  invoices: [
    { id: 'i1', petId: 'p1', service: 'Vaccination', amount: 600, date: nextWeekday(-14), status: 'paid' },
    { id: 'i2', petId: 'p2', service: 'Wellness Checkup', amount: 800, date: nextWeekday(-30), status: 'paid' },
    { id: 'i3', petId: 'p1', service: 'Dental Cleaning', amount: 1800, date: nextWeekday(-5), status: 'unpaid' },
    { id: 'i4', petId: 'p2', service: 'Deworming', amount: 450, date: nextWeekday(-2), status: 'unpaid' }
  ],
  reviews: [
    { id: 'r1', vetId: 'v1', author: 'Nusaiba R.', rating: 5, comment: 'Dr. Chowdhury was so gentle with Bumi — explained everything clearly.', date: nextWeekday(-20) },
    { id: 'r2', vetId: 'v1', author: 'Tanvir H.', rating: 4, comment: 'Good checkup, a bit of a wait but worth it.', date: nextWeekday(-40) },
    { id: 'r3', vetId: 'v2', author: 'Mehnaz A.', rating: 5, comment: 'Excellent surgeon, very reassuring before the procedure.', date: nextWeekday(-10) },
    { id: 'r4', vetId: 'v3', author: 'Rafsan K.', rating: 4, comment: 'Cleared up my cat\'s skin issue in two visits.', date: nextWeekday(-6) },
    { id: 'r5', vetId: 'v4', author: 'Ishrat J.', rating: 5, comment: 'Very patient during the dental cleaning, great with nervous pets.', date: nextWeekday(-3) }
  ],
  medicines: [
    { id: 'm1', name: 'Amoxicillin 250mg', price: 350, prescriptionRequired: true, desc: 'Antibiotic for bacterial infections.', icon: '💊' },
    { id: 'm2', name: 'Metacam Pain Relief', price: 680, prescriptionRequired: true, desc: 'Anti-inflammatory for post-op or chronic pain.', icon: '💊' },
    { id: 'm3', name: 'Prescription Renal Diet (2kg)', price: 1450, prescriptionRequired: true, desc: 'Therapeutic food for kidney support.', icon: '🥫' },
    { id: 'm4', name: 'Flea & Tick Spot-on', price: 550, prescriptionRequired: false, desc: 'Monthly external parasite protection.', icon: '🧴' },
    { id: 'm5', name: 'Multivitamin Chews', price: 420, prescriptionRequired: false, desc: 'Daily multivitamin support for coat and joints.', icon: '🍬' },
    { id: 'm6', name: 'Ear Cleaning Solution', price: 380, prescriptionRequired: false, desc: 'Gentle solution for routine ear care.', icon: '🧼' }
  ],
  cart: [],
  messages: [
    { from: 'bot', text: "Hi! I'm the Pawsitive Tails front desk bot. Ask me about hours, appointments, or anything else." }
  ]
};

function nextWeekday(offset){
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
}

const speciesMeta = {
  Dog: { icon: '🐶', color: 'var(--sage)' },
  Cat: { icon: '🐱', color: 'var(--marigold)' },
  Rabbit: { icon: '🐰', color: 'var(--coral)' },
  Bird: { icon: '🐦', color: 'var(--sage)' },
  Other: { icon: '🐾', color: 'var(--marigold)' }
};
const vetColors = ['var(--sage)', 'var(--marigold)', 'var(--coral)'];

/* ===================================================================
   PAW CONFETTI (fun celebration burst)
=================================================================== */
function pawConfetti(){
  const emojis = ['🐾', '🐾', '✨', '🐾'];
  for(let i = 0; i < 7; i++){
    const span = document.createElement('span');
    span.className = 'confetti-paw';
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = `calc(50% + ${(Math.random() - 0.5) * 220}px)`;
    span.style.top = '40%';
    span.style.fontSize = `${1 + Math.random() * 0.8}rem`;
    span.style.animationDelay = `${Math.random() * 0.15}s`;
    document.body.appendChild(span);
    setTimeout(() => span.remove(), 1300);
  }
}

/* ===================================================================
   TOAST
=================================================================== */
const toast = document.getElementById('toast');
let toastTimer;
function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

/* ===================================================================
   LOGIN
=================================================================== */
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('loginName').value.trim() || 'Guest';
  state.user = { name };
  document.getElementById('loginView').classList.add('hidden');
  document.getElementById('appShell').classList.remove('hidden');
  document.getElementById('userName').textContent = name;
  document.getElementById('userAvatar').textContent = name.charAt(0).toUpperCase();
  document.getElementById('dashGreeting').textContent = `Hi ${name.split(' ')[0]} 👋`;
  renderAll();
  showToast(`Welcome, ${name}!`);
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  document.getElementById('appShell').classList.add('hidden');
  document.getElementById('loginView').classList.remove('hidden');
  document.getElementById('loginForm').reset();
});

/* ===================================================================
   NAVIGATION
=================================================================== */
function switchView(viewName){
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.getElementById(`view-${viewName}`).classList.remove('hidden');
  document.querySelectorAll('.nav-item[data-view]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewName);
  });
}
document.querySelectorAll('.nav-item[data-view]').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});
document.querySelectorAll('[data-view-link]').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.viewLink));
});

/* ===================================================================
   RENDER: DASHBOARD
=================================================================== */
function renderDashboard(){
  document.getElementById('statPets').textContent = state.pets.length;
  document.getElementById('statAppointments').textContent =
    state.appointments.filter(a => a.status === 'upcoming').length;
  document.getElementById('statMessages').textContent =
    state.messages.filter(m => m.from === 'bot').length > 0 ? 1 : 0;

  const upcoming = state.appointments
    .filter(a => a.status === 'upcoming')
    .sort((a, b) => a.date.localeCompare(b.date))[0];
  const nextEl = document.getElementById('nextAppointment');
  if(upcoming){
    const pet = state.pets.find(p => p.id === upcoming.petId);
    const vet = state.vets.find(v => v.id === upcoming.vetId);
    nextEl.innerHTML = `
      <p class="appt-pet">${pet ? pet.name : 'Pet'} · ${upcoming.reason || 'Checkup'}</p>
      <p class="appt-meta">${formatDate(upcoming.date)} at ${upcoming.time} with ${vet ? vet.name : 'a vet'}</p>
    `;
  } else {
    nextEl.innerHTML = `<p class="empty">No upcoming visits — book one whenever you're ready.</p>`;
  }

  const dashPets = document.getElementById('dashPets');
  dashPets.innerHTML = state.pets.length
    ? state.pets.map(p => `
        <div class="mini-pet">
          <span class="mini-pet-icon">${(speciesMeta[p.species] || speciesMeta.Other).icon}</span>
          ${p.name}
        </div>`).join('')
    : `<p class="empty">No pets yet — add your first pet to get started.</p>`;
}

function formatDate(iso){
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

/* ===================================================================
   RENDER: PETS
=================================================================== */
function renderPets(filter = ''){
  const grid = document.getElementById('petGrid');
  const list = state.pets.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
  if(!list.length){
    grid.innerHTML = `<div class="empty-state">No pets found. Try adding one with "+ Add pet".</div>`;
    return;
  }
  grid.innerHTML = list.map(p => {
    const meta = speciesMeta[p.species] || speciesMeta.Other;
    return `
      <div class="pet-card" style="--tab-color:${meta.color}">
        <span class="pet-stamp">${p.species}</span>
        <div class="pet-card-head">
          <span class="pet-avatar">${meta.icon}</span>
          <div>
            <h3>${p.name}</h3>
            <span class="pet-species">${p.breed || 'Breed not set'}</span>
          </div>
        </div>
        <p class="pet-detail"><strong>Age:</strong> ${p.age || 'Not set'}</p>
        ${p.notes ? `<p class="pet-notes">${p.notes}</p>` : ''}
        <div class="pet-card-actions">
          <button class="pet-book" data-book-pet="${p.id}">Book visit</button>
          <button class="pet-remove" data-remove-pet="${p.id}">Remove</button>
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('[data-remove-pet]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.pets = state.pets.filter(p => p.id !== btn.dataset.removePet);
      renderPets();
      renderDashboard();
      showToast('Pet removed');
    });
  });
  grid.querySelectorAll('[data-book-pet]').forEach(btn => {
    btn.addEventListener('click', () => openBookingModal({ petId: btn.dataset.bookPet }));
  });
}

/* ---------- add pet modal ---------- */
const petModalOverlay = document.getElementById('petModalOverlay');
document.getElementById('addPetBtn').addEventListener('click', () => petModalOverlay.classList.remove('hidden'));
document.getElementById('petForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const pet = {
    id: 'p' + Date.now(),
    name: document.getElementById('petName').value.trim(),
    species: document.getElementById('petSpecies').value,
    age: document.getElementById('petAge').value.trim(),
    breed: document.getElementById('petBreed').value.trim(),
    notes: document.getElementById('petNotes').value.trim()
  };
  state.pets.push(pet);
  e.target.reset();
  petModalOverlay.classList.add('hidden');
  renderPets();
  renderDashboard();
  showToast(`${pet.name} added to your pets`);
  pawConfetti();
});

/* ===================================================================
   RENDER: APPOINTMENTS
=================================================================== */
function renderAppointments(){
  const list = document.getElementById('appointmentList');
  if(!state.appointments.length){
    list.innerHTML = `<div class="empty-state">No appointments yet — book your first visit.</div>`;
    return;
  }
  const sorted = [...state.appointments].sort((a, b) => a.date.localeCompare(b.date));
  list.innerHTML = sorted.map(a => {
    const pet = state.pets.find(p => p.id === a.petId);
    const vet = state.vets.find(v => v.id === a.vetId);
    const d = new Date(a.date + 'T00:00:00');
    const cancelled = a.status === 'cancelled';
    return `
      <div class="appointment-row ${cancelled ? 'cancelled' : ''}">
        <div class="appt-date-badge">${d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</div>
        <div class="appt-info">
          <h3>${pet ? pet.name : 'Pet'} — ${a.reason || 'Checkup'}</h3>
          <p>${a.time} with ${vet ? vet.name : 'a vet'}</p>
        </div>
        <span class="appt-status ${cancelled ? 'cancelled-status' : ''}">${cancelled ? 'Cancelled' : 'Upcoming'}</span>
        ${!cancelled ? `<button class="appt-cancel" data-cancel="${a.id}">Cancel</button>` : ''}
      </div>`;
  }).join('');

  list.querySelectorAll('[data-cancel]').forEach(btn => {
    btn.addEventListener('click', () => {
      const appt = state.appointments.find(a => a.id === btn.dataset.cancel);
      if(appt) appt.status = 'cancelled';
      renderAppointments();
      renderDashboard();
      showToast('Appointment cancelled');
    });
  });
}

/* ===================================================================
   RENDER: VETS
=================================================================== */
function starString(rating){
  const full = Math.round(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function vetReviews(vetId){
  return state.reviews.filter(r => r.vetId === vetId).sort((a, b) => b.date.localeCompare(a.date));
}

function vetAvgRating(vetId){
  const revs = vetReviews(vetId);
  if(!revs.length) return 0;
  return revs.reduce((sum, r) => sum + r.rating, 0) / revs.length;
}

function renderVets(filter = ''){
  const grid = document.getElementById('vetGrid');
  const list = state.vets.filter(v =>
    v.name.toLowerCase().includes(filter.toLowerCase()) ||
    v.specialty.toLowerCase().includes(filter.toLowerCase())
  );
  if(!list.length){
    grid.innerHTML = `<div class="empty-state">No vets match that search.</div>`;
    return;
  }
  grid.innerHTML = list.map((v, i) => {
    const revs = vetReviews(v.id);
    const avg = vetAvgRating(v.id);
    return `
    <div class="vet-card">
      <div class="vet-avatar" style="background:${vetColors[i % vetColors.length]}">
        ${v.name.split(' ').map(n => n[0]).slice(1, 3).join('')}
      </div>
      <h3>${v.name}</h3>
      <p class="vet-specialty">${v.specialty}</p>
      <p class="vet-exp">${v.exp}</p>
      <div class="vet-rating">
        <span class="stars">${starString(avg)}</span>
        <span class="rating-num">${avg ? avg.toFixed(1) : 'No ratings'}</span>
        ${revs.length ? `<span class="rating-count">(${revs.length})</span>` : ''}
      </div>
      <div class="vet-card-actions">
        <button class="vet-book-btn" data-book-vet="${v.id}">Book appointment</button>
        <button class="vet-review-btn" data-review-vet="${v.id}">Write a review</button>
      </div>
      ${revs.length ? `
        <button class="vet-reviews-toggle" data-toggle-reviews="${v.id}">Show ${revs.length} review${revs.length > 1 ? 's' : ''} ▾</button>
        <div class="vet-review-list hidden" id="reviews-${v.id}">
          ${revs.map(r => `
            <div class="review-item">
              <div class="review-head">
                <span class="review-author">${r.author}</span>
                <span class="review-stars">${starString(r.rating)}</span>
              </div>
              <p class="review-comment">${r.comment}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
  }).join('');

  grid.querySelectorAll('[data-book-vet]').forEach(btn => {
    btn.addEventListener('click', () => openBookingModal({ vetId: btn.dataset.bookVet }));
  });
  grid.querySelectorAll('[data-review-vet]').forEach(btn => {
    btn.addEventListener('click', () => openReviewModal(btn.dataset.reviewVet));
  });
  grid.querySelectorAll('[data-toggle-reviews]').forEach(btn => {
    btn.addEventListener('click', () => {
      const list = document.getElementById(`reviews-${btn.dataset.toggleReviews}`);
      const showing = !list.classList.contains('hidden');
      list.classList.toggle('hidden');
      btn.textContent = showing
        ? btn.textContent.replace('▴', '▾').replace('Hide', 'Show')
        : btn.textContent.replace('▾', '▴').replace('Show', 'Hide');
    });
  });
}

/* ===================================================================
   RENDER: SERVICES
=================================================================== */
function renderServices(){
  const grid = document.getElementById('serviceGrid');
  grid.innerHTML = state.services.map(s => `
    <div class="service-card tilt-hover">
      <span class="service-icon">${s.icon || '🐾'}</span>
      <h3>${s.name}</h3>
      <p class="service-desc">${s.desc}</p>
      <div class="service-foot">
        <span class="service-price">৳${s.price}</span>
        <button class="service-book-btn" data-book-service="${s.name}">Book now</button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('[data-book-service]').forEach(btn => {
    btn.addEventListener('click', () => openBookingModal({ reason: btn.dataset.bookService }));
  });
}

/* ===================================================================
   RENDER: PHARMACY
=================================================================== */
function renderPharmacy(){
  const grid = document.getElementById('medicineGrid');
  grid.innerHTML = state.medicines.map(med => `
    <div class="medicine-card tilt-hover">
      ${med.prescriptionRequired ? `<span class="rx-badge">Rx required</span>` : ''}
      <span class="service-icon">${med.icon}</span>
      <h3>${med.name}</h3>
      <p class="service-desc">${med.desc}</p>
      <div class="service-foot">
        <span class="service-price">৳${med.price}</span>
        <button class="service-book-btn" data-add-medicine="${med.id}">Add to cart</button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('[data-add-medicine]').forEach(btn => {
    btn.addEventListener('click', () => {
      const med = state.medicines.find(m => m.id === btn.dataset.addMedicine);
      if(med.prescriptionRequired){
        openPrescriptionModal(med.id);
      } else {
        addToCart(med.id, null);
        showToast(`${med.name} added to cart`);
      }
    });
  });

  updateCartBadge();
}

function updateCartBadge(){
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').textContent = count;
}

function addToCart(medicineId, prescription){
  const existing = state.cart.find(item =>
    item.medicineId === medicineId &&
    JSON.stringify(item.prescription) === JSON.stringify(prescription)
  );
  if(existing){
    existing.qty += 1;
  } else {
    state.cart.push({ cartId: 'c' + Date.now(), medicineId, qty: 1, prescription });
  }
  updateCartBadge();
}

/* ---------- prescription modal ---------- */
const prescriptionModalOverlay = document.getElementById('prescriptionModalOverlay');
let activeMedicineId = null;

function openPrescriptionModal(medicineId){
  const med = state.medicines.find(m => m.id === medicineId);
  if(!med) return;
  activeMedicineId = medicineId;
  document.getElementById('prescriptionMedName').textContent = med.name;
  document.getElementById('prescriptionForm').reset();

  const vetSelect = document.getElementById('prescriptionVet');
  vetSelect.innerHTML = state.vets.map(v => `<option value="${v.id}">${v.name} — ${v.specialty}</option>`).join('');

  prescriptionModalOverlay.classList.remove('hidden');
}

document.getElementById('prescriptionForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const med = state.medicines.find(m => m.id === activeMedicineId);
  const vetId = document.getElementById('prescriptionVet').value;
  const note = document.getElementById('prescriptionNote').value.trim();
  const vet = state.vets.find(v => v.id === vetId);

  addToCart(activeMedicineId, { vetId, vetName: vet ? vet.name : '', note });
  prescriptionModalOverlay.classList.add('hidden');
  showToast(`${med.name} added to cart with prescription`);
});

/* ---------- cart modal ---------- */
const cartModalOverlay = document.getElementById('cartModalOverlay');

document.getElementById('openCartBtn').addEventListener('click', openCartModal);

function openCartModal(){
  const petSelect = document.getElementById('cartPetSelect');
  petSelect.innerHTML = state.pets.length
    ? state.pets.map(p => `<option value="${p.id}">${p.name}</option>`).join('')
    : `<option value="">Add a pet first</option>`;
  renderCartModal();
  cartModalOverlay.classList.remove('hidden');
}

function renderCartModal(){
  const list = document.getElementById('cartItemList');
  if(!state.cart.length){
    list.innerHTML = `<p class="empty" style="padding:20px 0;text-align:center;">Your cart is empty.</p>`;
    document.getElementById('cartTotal').textContent = '৳0';
    return;
  }

  list.innerHTML = state.cart.map(item => {
    const med = state.medicines.find(m => m.id === item.medicineId);
    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <p class="cart-item-name">${med.icon} ${med.name}</p>
          ${item.prescription ? `<p class="cart-item-rx">Rx: ${item.prescription.vetName || 'Vet'}${item.prescription.note ? ` — ${item.prescription.note}` : ''}</p>` : ''}
        </div>
        <div class="cart-item-qty">
          <button type="button" data-qty-decrease="${item.cartId}">−</button>
          <span>${item.qty}</span>
          <button type="button" data-qty-increase="${item.cartId}">+</button>
        </div>
        <span class="cart-item-price">৳${med.price * item.qty}</span>
        <button type="button" class="cart-item-remove" data-remove-cart="${item.cartId}">✕</button>
      </div>
    `;
  }).join('');

  const total = state.cart.reduce((sum, item) => {
    const med = state.medicines.find(m => m.id === item.medicineId);
    return sum + med.price * item.qty;
  }, 0);
  document.getElementById('cartTotal').textContent = `৳${total}`;

  list.querySelectorAll('[data-qty-increase]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = state.cart.find(i => i.cartId === btn.dataset.qtyIncrease);
      item.qty += 1;
      renderCartModal();
      updateCartBadge();
    });
  });
  list.querySelectorAll('[data-qty-decrease]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = state.cart.find(i => i.cartId === btn.dataset.qtyDecrease);
      item.qty -= 1;
      if(item.qty <= 0) state.cart = state.cart.filter(i => i.cartId !== item.cartId);
      renderCartModal();
      updateCartBadge();
    });
  });
  list.querySelectorAll('[data-remove-cart]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.cart = state.cart.filter(i => i.cartId !== btn.dataset.removeCart);
      renderCartModal();
      updateCartBadge();
    });
  });
}

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if(!state.cart.length){
    showToast('Your cart is empty');
    return;
  }
  if(!state.pets.length){
    showToast('Add a pet before checking out');
    return;
  }
  const petId = document.getElementById('cartPetSelect').value;
  const itemCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const total = state.cart.reduce((sum, item) => {
    const med = state.medicines.find(m => m.id === item.medicineId);
    return sum + med.price * item.qty;
  }, 0);

  state.invoices.push({
    id: 'i' + Date.now(),
    petId,
    service: `Pharmacy order (${itemCount} item${itemCount > 1 ? 's' : ''})`,
    amount: total,
    date: nextWeekday(0),
    status: 'unpaid'
  });

  state.cart = [];
  cartModalOverlay.classList.add('hidden');
  updateCartBadge();
  renderBilling();
  switchView('billing');
  showToast('Order placed — pay your invoice in Billing');
  pawConfetti();
});

/* ===================================================================
   RENDER: BILLING
=================================================================== */
function renderBilling(){
  const totalBilled = state.invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const totalPaid = state.invoices.filter(i => i.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0);
  const totalOutstanding = totalBilled - totalPaid;

  document.getElementById('billTotal').textContent = `৳${totalBilled}`;
  document.getElementById('billPaid').textContent = `৳${totalPaid}`;
  document.getElementById('billOutstanding').textContent = `৳${totalOutstanding}`;

  const list = document.getElementById('invoiceList');
  if(!state.invoices.length){
    list.innerHTML = `<div class="empty-state">No invoices yet.</div>`;
    return;
  }

  const sorted = [...state.invoices].sort((a, b) => b.date.localeCompare(a.date));
  list.innerHTML = sorted.map(inv => {
    const pet = state.pets.find(p => p.id === inv.petId);
    const d = new Date(inv.date + 'T00:00:00');
    const paid = inv.status === 'paid';
    return `
      <div class="invoice-row ${paid ? 'paid-row' : ''}">
        <div class="invoice-date-badge">${d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</div>
        <div class="invoice-info">
          <h3>${inv.service}</h3>
          <p>${pet ? pet.name : 'Pet'}</p>
        </div>
        <div class="invoice-amount">৳${inv.amount}</div>
        <span class="invoice-status ${paid ? 'paid-status' : ''}">${paid ? 'Paid' : 'Unpaid'}</span>
        ${!paid ? `<button class="invoice-pay-btn" data-pay-invoice="${inv.id}">Pay now</button>` : ''}
      </div>`;
  }).join('');

  list.querySelectorAll('[data-pay-invoice]').forEach(btn => {
    btn.addEventListener('click', () => openPaymentModal(btn.dataset.payInvoice));
  });
}

/* ===================================================================
   REVIEW MODAL
=================================================================== */
const reviewModalOverlay = document.getElementById('reviewModalOverlay');
let activeReviewVetId = null;
let selectedRating = 0;

function openReviewModal(vetId){
  const vet = state.vets.find(v => v.id === vetId);
  if(!vet) return;
  activeReviewVetId = vetId;
  selectedRating = 0;
  document.getElementById('reviewVetName').textContent = vet.name;
  document.getElementById('reviewForm').reset();
  document.getElementById('reviewAuthor').value = state.user ? state.user.name : '';
  updateStarPicker(0);
  reviewModalOverlay.classList.remove('hidden');
}

const starPicker = document.getElementById('starPicker');
const starButtons = starPicker.querySelectorAll('[data-star]');

function updateStarPicker(rating){
  starButtons.forEach(btn => {
    btn.textContent = Number(btn.dataset.star) <= rating ? '★' : '☆';
    btn.classList.toggle('star-selected', Number(btn.dataset.star) <= rating);
  });
}

starButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    selectedRating = Number(btn.dataset.star);
    updateStarPicker(selectedRating);
  });
  btn.addEventListener('mouseenter', () => updateStarPicker(Number(btn.dataset.star)));
});
starPicker.addEventListener('mouseleave', () => updateStarPicker(selectedRating));

document.getElementById('reviewForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if(!selectedRating){
    showToast('Please select a star rating');
    return;
  }
  const authorInput = document.getElementById('reviewAuthor');
  const commentInput = document.getElementById('reviewComment');

  state.reviews.push({
    id: 'r' + Date.now(),
    vetId: activeReviewVetId,
    author: authorInput.value.trim() || (state.user ? state.user.name : 'Anonymous'),
    rating: selectedRating,
    comment: commentInput.value.trim() || 'No comment provided.',
    date: nextWeekday(0)
  });

  reviewModalOverlay.classList.add('hidden');
  renderVets(document.getElementById('globalSearch').value);
  showToast('Thanks for your review!');
  pawConfetti();
});

/* ===================================================================
   PAYMENT MODAL
=================================================================== */
const paymentModalOverlay = document.getElementById('paymentModalOverlay');
let activeInvoiceId = null;

function openPaymentModal(invoiceId){
  const invoice = state.invoices.find(i => i.id === invoiceId);
  if(!invoice) return;
  activeInvoiceId = invoiceId;
  document.getElementById('paymentAmount').textContent = `৳${invoice.amount}`;
  document.getElementById('paymentForm').reset();
  paymentModalOverlay.classList.remove('hidden');
}

document.getElementById('payCardNumber').addEventListener('input', (e) => {
  const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
  e.target.value = digits.replace(/(.{4})/g, '$1 ').trim();
});
document.getElementById('payExpiry').addEventListener('input', (e) => {
  let digits = e.target.value.replace(/\D/g, '').slice(0, 4);
  if(digits.length > 2) digits = digits.slice(0, 2) + '/' + digits.slice(2);
  e.target.value = digits;
});
document.getElementById('payCvv').addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
});

document.getElementById('paymentForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const invoice = state.invoices.find(i => i.id === activeInvoiceId);
  if(!invoice) return;

  const submitBtn = document.getElementById('paySubmitBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Processing…';

  setTimeout(() => {
    invoice.status = 'paid';
    submitBtn.disabled = false;
    submitBtn.textContent = 'Confirm payment';
    paymentModalOverlay.classList.add('hidden');
    renderBilling();
    showToast(`Payment of ৳${invoice.amount} received — thank you!`);
    pawConfetti();
  }, 900);
});

/* ===================================================================
   BOOKING MODAL
=================================================================== */
const bookingModalOverlay = document.getElementById('bookingModalOverlay');
document.querySelectorAll('[data-open-booking]').forEach(btn => {
  btn.addEventListener('click', () => openBookingModal());
});

function openBookingModal(prefill = {}){
  const petSelect = document.getElementById('bookPet');
  const vetSelect = document.getElementById('bookVet');

  petSelect.innerHTML = state.pets.length
    ? state.pets.map(p => `<option value="${p.id}">${p.name}</option>`).join('')
    : `<option value="">Add a pet first</option>`;
  vetSelect.innerHTML = state.vets.map(v => `<option value="${v.id}">${v.name} — ${v.specialty}</option>`).join('');

  if(prefill.petId) petSelect.value = prefill.petId;
  if(prefill.vetId) vetSelect.value = prefill.vetId;
  document.getElementById('bookReason').value = prefill.reason || '';
  document.getElementById('bookDate').value = '';
  document.getElementById('bookTime').value = '';

  bookingModalOverlay.classList.remove('hidden');
}

document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  if(!state.pets.length){
    showToast('Add a pet before booking a visit');
    return;
  }
  const appt = {
    id: 'a' + Date.now(),
    petId: document.getElementById('bookPet').value,
    vetId: document.getElementById('bookVet').value,
    date: document.getElementById('bookDate').value,
    time: document.getElementById('bookTime').value,
    reason: document.getElementById('bookReason').value.trim(),
    status: 'upcoming'
  };
  state.appointments.push(appt);
  bookingModalOverlay.classList.add('hidden');
  e.target.reset();
  renderAppointments();
  renderDashboard();
  switchView('appointments');
  showToast('Appointment booked');
  pawConfetti();
});

/* ---------- shared modal close ---------- */
document.querySelectorAll('[data-close-modal]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.closeModal).classList.add('hidden');
  });
});
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if(e.target === overlay) overlay.classList.add('hidden');
  });
});

/* ===================================================================
   CHAT
=================================================================== */
function renderChat(){
  const body = document.getElementById('chatBody');
  body.innerHTML = state.messages.map(m => `<div class="msg msg-${m.from}">${m.text}</div>`).join('');
  body.scrollTop = body.scrollHeight;
}

function botReplyFor(text){
  const t = text.toLowerCase();
  if(t.includes('hour') || t.includes('open')) return "We're open every day, 9am–8pm, including weekends.";
  if(t.includes('appointment') || t.includes('book')) return 'You can book from the Appointments tab, or tell me a vet and I\'ll point you there.';
  if(t.includes('price') || t.includes('cost')) return 'Check the Services tab for our full price list — it starts at ৳600.';
  if(t.includes('emergency')) return 'For emergencies, call the clinic directly — we keep a vet on call at all times.';
  if(t.includes('thank')) return "You're welcome! Anything else for your pet today?";
  return "Got it — someone from our front desk will follow up shortly. Anything else I can help with?";
}

document.getElementById('chatForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text) return;
  state.messages.push({ from: 'user', text });
  input.value = '';
  renderChat();

  const body = document.getElementById('chatBody');
  const typing = document.createElement('div');
  typing.className = 'msg msg-typing';
  typing.textContent = 'Front desk is typing…';
  body.appendChild(typing);
  body.scrollTop = body.scrollHeight;

  setTimeout(() => {
    state.messages.push({ from: 'bot', text: botReplyFor(text) });
    renderChat();
  }, 900);
});

/* ===================================================================
   NOTIFICATIONS
=================================================================== */
const bellBtn = document.getElementById('bellBtn');
const bellDropdown = document.getElementById('bellDropdown');
bellBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  bellDropdown.classList.toggle('hidden');
  document.getElementById('bellDot').style.display = 'none';
});
document.addEventListener('click', (e) => {
  if(!bellDropdown.contains(e.target) && e.target !== bellBtn){
    bellDropdown.classList.add('hidden');
  }
});
function renderNotifications(){
  const list = document.getElementById('notifList');
  const notes = [];
  const upcoming = state.appointments.find(a => a.status === 'upcoming');
  if(upcoming){
    const pet = state.pets.find(p => p.id === upcoming.petId);
    notes.push(`Upcoming visit for ${pet ? pet.name : 'your pet'} on ${formatDate(upcoming.date)}.`);
  }
  notes.push('New health tips added to your pet passport.');
  notes.push('Pawsitive Tails is open today until 8pm.');
  list.innerHTML = notes.map(n => `<li>${n}</li>`).join('');
}

/* ===================================================================
   SEARCH
=================================================================== */
document.getElementById('globalSearch').addEventListener('input', (e) => {
  const activeView = document.querySelector('.nav-item.active')?.dataset.view;
  if(activeView === 'pets') renderPets(e.target.value);
  else if(activeView === 'vets') renderVets(e.target.value);
});

/* ===================================================================
   INITIAL RENDER
=================================================================== */
function renderAll(){
  renderDashboard();
  renderPets();
  renderAppointments();
  renderVets();
  renderServices();
  renderBilling();
  renderPharmacy();
  renderChat();
  renderNotifications();
}
