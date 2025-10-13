const events = [
    {
        id: 1,
        name: "Rock Music Festival",
        category: "music",
        description: "High‑energy rock concert with stunning stage lighting and crowd vibes",
        price: 2500,
        img: "assets/rock-concert.jpg"
    },
    {
        id: 2,
        name: "Jazz Night Live",
        category: "music",
        description: "Smooth live jazz ensemble with soulful sax and rhythm section",
        price: 1800,
        img: "assets/jazz-band-silhouette.jpg"
    },
    {
        id: 3,
        name: "Classical Symphony",
        category: "music",
        description: "Immersive Indian classical evening led by Soumik Datta on sarod",
        price: 2200,
        img: "assets/soumik-datta.jpg"
    },
    {
        id: 4,
        name: "Pop Concert Spectacular",
        category: "music",
        description: "Arena pop show with massive crowd and pyrotechnics",
        price: 3000,
        img: "assets/pop-concert-crowd.jpg"
    },
    {
        id: 5,
        name: "Action Movie Premiere",
        category: "movies",
        description: "Intense action drama — One Battle After Another",
        price: 500,
        img: "assets/movie-one-battle.jpg"
    },
    {
        id: 6,
        name: "Comedy Film Screening",
        category: "movies",
        description: "Light‑hearted Bollywood comedy — Sunny Sanskari Ki Tulsi Kumari",
        price: 400,
        img: "assets/movie-sunny-tulsi.jpg"
    },
    {
        id: 7,
        name: "Horror Movie Marathon",
        category: "movies",
        description: "Gritty thriller vibes — Dashavatar",
        price: 800,
        img: "assets/movie-dashavatar.jpg"
    },
    {
        id: 8,
        name: "Romantic Drama",
        category: "movies",
        description: "Romantic drama — Saiyaara",
        price: 450,
        img: "assets/movie-saiyaara.jpg"
    },
    {
        id: 9,
        name: "Theater Play: Shakespeare",
        category: "other",
        description: "Dramatic stage performance accompanied by a live brass section",
        price: 1500,
        img: "assets/saxophones.jpg"
    },
    {
        id: 10,
        name: "Stand-up Comedy Show",
        category: "other",
        description: "Stand‑up recording show featuring Harsh Gujral",
        price: 1200,
        img: "assets/harsh-gujral.jpg"
    },
    {
        id: 11,
        name: "Football Championship",
        category: "other",
        description: "Football match at a packed modern stadium",
        price: 2800,
        img: "assets/soccer-stadium.jpg"
    },
    {
        id: 12,
        name: "Art Exhibition",
        category: "other",
        description: "Curated contemporary art exhibition in a modern gallery",
        price: 350,
        img: "assets/art-gallery.jpg"
    }
];

function renderEvents(category = 'all') {
    const eventsGrid = document.getElementById('eventsGrid');
    if (!eventsGrid) return;

    const filteredEvents = category === 'all' 
        ? events 
        : events.filter(event => event.category === category);

    eventsGrid.innerHTML = filteredEvents.map(event => `
        <div class="event-card" onclick="viewEventDetails(${event.id})">
            <div class="event-image"><img src="${event.img}" alt="${event.name}"></div>
            <div class="event-content">
                <span class="event-category">${event.category}</span>
                <h3>${event.name}</h3>
                <p>${event.description}</p>
                <div class="event-price">₹ ${event.price}</div>
            </div>
        </div>
    `).join('');
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const category = this.getAttribute('data-category');
            renderEvents(category);
        });
    });
}

function viewEventDetails(eventId) {
    localStorage.setItem('selectedEventId', eventId);
    window.location.href = 'event-details.html';
}

function displayEventDetails() {
    const eventId = parseInt(localStorage.getItem('selectedEventId'));
    const event = events.find(e => e.id === eventId);
    const detailsContainer = document.getElementById('eventDetails');
    
    if (!event || !detailsContainer) {
        if (detailsContainer) {
            detailsContainer.innerHTML = '<p>Event not found</p>';
        }
        return;
    }

    detailsContainer.innerHTML = `
        <div class="event-image" style="height: 300px;"><img src="${event.img}" alt="${event.name}"></div>
        <h1>${event.name}</h1>
        <span class="event-category">${event.category}</span>
        <div class="details-info">
            <div class="info-item"><strong>Description:</strong> ${event.description}</div>
            <div class="info-item"><strong>Category:</strong> ${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</div>
            <div class="info-item"><strong>Price:</strong> <span style="color: #27ae60; font-size: 1.5rem;">₹ ${event.price}</span></div>
        </div>
        <button class="btn btn-primary" onclick="goToBooking()">Book Now</button>
        <button class="btn btn-secondary" onclick="history.back()" style="margin-left: 10px;">Back to Events</button>
    `;
}

function goToBooking() {
    window.location.href = 'booking.html';
}

function displayBookingSummary() {
    const eventId = parseInt(localStorage.getItem('selectedEventId'));
    const event = events.find(e => e.id === eventId);
    const summaryContainer = document.getElementById('eventSummary');
    
    if (!event || !summaryContainer) return;

    summaryContainer.innerHTML = `
        <h2>${event.name}</h2>
        <p><strong>Category:</strong> ${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</p>
        <p><strong>Price per ticket:</strong> ₹ ${event.price}</p>
    `;
}

function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function generateBookingId() {
    // Generate a unique booking ID with format: TH-YYYYMMDD-XXXX
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateStr = `${year}${month}${day}`;
    
    // Generate a random 4-digit number
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    
    // Add timestamp to ensure uniqueness
    const timestamp = now.getTime().toString().slice(-3);
    
    return `TH-${dateStr}-${randomNum}${timestamp}`;
}

function setupBookingForm() {
    const form = document.getElementById('bookingForm');
    const dateInput = document.getElementById('date');
    const dateError = document.getElementById('dateError');
    
    if (!form || !dateInput) return;

    dateInput.setAttribute('min', getTodayDate());

    dateInput.addEventListener('change', function() {
        const selectedDate = new Date(this.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            dateError.textContent = 'Error: Cannot select a past date. Please choose today or a future date.';
            this.value = '';
        } else {
            dateError.textContent = '';
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            dateError.textContent = 'Error: Cannot select a past date. Please choose today or a future date.';
            return;
        }

        const bookingData = {
            bookingId: generateBookingId(),
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            tickets: document.getElementById('tickets').value,
            date: dateInput.value,
            eventId: localStorage.getItem('selectedEventId'),
            createdAt: new Date().toISOString()
        };

        localStorage.setItem('bookingData', JSON.stringify(bookingData));
        // persist into booking history list
        saveBookingToHistory(bookingData);
        window.location.href = 'confirmation.html';
    });
}

function displayConfirmation() {
    const summaryContainer = document.getElementById('bookingSummary');
    if (!summaryContainer) return;

    const bookingData = JSON.parse(localStorage.getItem('bookingData'));
    const eventId = parseInt(bookingData.eventId);
    const event = events.find(e => e.id === eventId);

    if (!bookingData || !event) {
        summaryContainer.innerHTML = '<p>No booking data found</p>';
        return;
    }

    const totalPrice = event.price * parseInt(bookingData.tickets);

    summaryContainer.innerHTML = `
        <h3>Booking Details</h3>
        <div class="summary-item"><strong>Booking ID:</strong> <span style="color: #f1c40f; font-weight: bold;">${bookingData.bookingId || 'N/A'}</span></div>
        <div class="summary-item"><strong>Event:</strong> ${event.name}</div>
        <div class="summary-item"><strong>Name:</strong> ${bookingData.name}</div>
        <div class="summary-item"><strong>Email:</strong> ${bookingData.email}</div>
        <div class="summary-item"><strong>Number of Tickets:</strong> ${bookingData.tickets}</div>
        <div class="summary-item"><strong>Date:</strong> ${bookingData.date}</div>
        <div class="summary-item"><strong>Total Price:</strong> <span style="color: #27ae60; font-size: 1.2rem;">₹ ${totalPrice}</span></div>
    `;
}

function saveBookingToHistory(bookingData) {
    try {
        const list = JSON.parse(localStorage.getItem('bookings') || '[]');
        list.push(bookingData);
        localStorage.setItem('bookings', JSON.stringify(list));
    } catch (e) {
        console.error('Failed to save booking history', e);
    }
}

function displayMyBookings() {
    const grid = document.getElementById('bookingsGrid');
    const empty = document.getElementById('bookingsEmpty');
    if (!grid || !empty) return;

    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    if (!bookings.length) {
        empty.style.display = 'block';
        grid.innerHTML = '';
        return;
    }

    empty.style.display = 'none';
    grid.innerHTML = bookings.map((b, idx) => {
        const ev = events.find(e => e.id === parseInt(b.eventId));
        const img = ev ? ev.img : '';
        const eventName = ev ? ev.name : 'Event';
        const eventCategory = ev ? ev.category : 'unknown';
        const eventDescription = ev ? ev.description : 'No description available';
        const price = ev ? ev.price : 0;
        const total = price * parseInt(b.tickets || 1);
        
        return `
        <div class="event-card" data-booking-index="${idx}">
            <div class="event-image"><img src="${img}" alt="${eventName}" loading="lazy" decoding="async"></div>
            <div class="event-content">
                <span class="event-category">booking</span>
                <h3>${eventName}</h3>
                <p style="margin: 8px 0; color: #e0e0e0;"><strong>Date:</strong> ${b.date}</p>
                <p style="margin: 8px 0; color: #e0e0e0;"><strong>Tickets:</strong> ${b.tickets}</p>
                <div class="event-price">₹ ${total}</div>
                <div style="margin-top:15px; display:flex; gap:10px; flex-wrap:wrap;">
                    <button class="btn btn-primary" onclick="viewBookingDetails(${idx})" style="flex: 1; min-width: 120px; text-align: center;">View Booking</button>
                    <button class="btn btn-secondary" onclick="deleteBooking(${idx})" style="flex: 1; min-width: 120px; text-align: center;">Cancel Booking</button>
                </div>
            </div>
        </div>`;
    }).join('');
}

function deleteBooking(index) {
    const list = JSON.parse(localStorage.getItem('bookings') || '[]');
    if (index < 0 || index >= list.length) return;
    // Confirm simple deletion
    const ok = confirm('Cancel this booking? This action cannot be undone.');
    if (!ok) return;
    list.splice(index, 1);
    localStorage.setItem('bookings', JSON.stringify(list));
    displayMyBookings();
}

function viewBookingDetails(index) {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    if (index < 0 || index >= bookings.length) return;
    
    const booking = bookings[index];
    const event = events.find(e => e.id === parseInt(booking.eventId));
    
    if (!event) {
        alert('Event details not found');
        return;
    }
    
    const totalPrice = event.price * parseInt(booking.tickets);
    const bookingDate = new Date(booking.createdAt || Date.now()).toLocaleDateString();
    
    // Create modal-like display
    const modalHtml = `
        <div id="bookingModal" style="
            position: fixed; 
            top: 0; 
            left: 0; 
            width: 100%; 
            height: 100%; 
            background: rgba(0,0,0,0.8); 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            z-index: 10000;
            backdrop-filter: blur(5px);
        ">
            <div style="
                background: linear-gradient(135deg, rgba(30, 30, 60, 0.95) 0%, rgba(20, 20, 40, 0.95) 100%); 
                padding: 2rem; 
                border-radius: 15px; 
                max-width: 600px; 
                width: 90%; 
                max-height: 90vh; 
                overflow-y: auto;
                border: 2px solid rgba(52, 152, 219, 0.3);
                box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h2 style="color: #fff; margin: 0; text-shadow: 0 2px 10px rgba(0,0,0,0.5);">Booking Details</h2>
                    <button onclick="closeBookingModal()" style="
                        background: #e74c3c; 
                        color: white; 
                        border: none; 
                        border-radius: 50%; 
                        width: 35px; 
                        height: 35px; 
                        cursor: pointer; 
                        font-size: 18px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    ">×</button>
                </div>
                
                <!-- Event Image -->
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <img src="${event.img}" alt="${event.name}" style="
                        max-width: 100%; 
                        height: 200px; 
                        object-fit: cover; 
                        border-radius: 10px;
                        box-shadow: 0 8px 25px rgba(0,0,0,0.4);
                    ">
                </div>
                
                <!-- Event Details -->
                <div style="background: rgba(46, 204, 113, 0.1); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #2ecc71;">
                    <h3 style="color: #2ecc71; margin: 0 0 1rem 0; font-size: 1.1rem; text-transform: uppercase;">Event Information</h3>
                    <div style="color: #e0e0e0;">
                        <p style="margin: 8px 0;"><strong style="color: #2ecc71;">Event Name:</strong> ${event.name}</p>
                        <p style="margin: 8px 0;"><strong style="color: #2ecc71;">Category:</strong> ${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</p>
                        <p style="margin: 8px 0;"><strong style="color: #2ecc71;">Description:</strong> ${event.description}</p>
                        <p style="margin: 8px 0;"><strong style="color: #2ecc71;">Price per Ticket:</strong> ₹ ${event.price}</p>
                    </div>
                </div>
                
                <!-- Customer Details -->
                <div style="background: rgba(52, 152, 219, 0.1); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #3498db;">
                    <h3 style="color: #3498db; margin: 0 0 1rem 0; font-size: 1.1rem; text-transform: uppercase;">Customer Information</h3>
                    <div style="color: #e0e0e0;">
                        <p style="margin: 8px 0;"><strong style="color: #3498db;">Booking ID:</strong> <span style="color: #f1c40f; font-weight: bold;">${booking.bookingId || 'N/A'}</span></p>
                        <p style="margin: 8px 0;"><strong style="color: #3498db;">Name:</strong> ${booking.name}</p>
                        <p style="margin: 8px 0;"><strong style="color: #3498db;">Email:</strong> ${booking.email}</p>
                        <p style="margin: 8px 0;"><strong style="color: #3498db;">Event Date:</strong> ${booking.date}</p>
                        <p style="margin: 8px 0;"><strong style="color: #3498db;">Number of Tickets:</strong> ${booking.tickets}</p>
                        <p style="margin: 8px 0;"><strong style="color: #3498db;">Booking Date:</strong> ${bookingDate}</p>
                    </div>
                </div>
                
                <!-- Total Price -->
                <div style="background: rgba(241, 196, 15, 0.1); padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem; border-left: 4px solid #f1c40f; text-align: center;">
                    <h3 style="color: #f1c40f; margin: 0 0 0.5rem 0; font-size: 1.1rem; text-transform: uppercase;">Total Amount</h3>
                    <div style="color: #f1c40f; font-size: 2rem; font-weight: bold;">₹ ${totalPrice}</div>
                </div>
                
                <!-- Action Buttons -->
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <button onclick="closeBookingModal()" class="btn btn-primary">Close</button>
                    <button onclick="deleteBooking(${index}); closeBookingModal();" class="btn btn-secondary">Cancel Booking</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.remove();
    }
}

function initializePage() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);

    switch(page) {
        case 'events.html':
            renderEvents();
            setupFilters();
            break;
        case 'event-details.html':
            displayEventDetails();
            break;
        case 'booking.html':
            displayBookingSummary();
            setupBookingForm();
            break;
        case 'confirmation.html':
            displayConfirmation();
            break;
        case 'my-bookings.html':
            displayMyBookings();
            break;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}
