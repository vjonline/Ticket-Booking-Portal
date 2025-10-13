# TicketHub - Event Ticketing System

A comprehensive and elegant event ticketing system built with plain HTML, CSS, and JavaScript. Users can browse events, filter by category, book tickets online, and manage their bookings with a complete booking management system.

## Features

### Core Features
- **Browse Events**: View all available events across different categories (Music, Movies, Other)
- **Category Filters**: Dynamic filtering with visual feedback and active state highlighting
- **Event Details**: Comprehensive information about each event with high-quality images
- **Advanced Booking System**: Complete booking flow with form validation and confirmation
- **Booking Management**: Full booking history with detailed view and cancellation options
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Booking System Features
- **Unique Booking IDs**: Auto-generated unique booking identifiers (Format: TH-YYYYMMDD-XXXX###)
- **Date Validation**: Built-in calendar with past date prevention and error handling
- **Price Display**: Professional rupees symbol (₹) for all pricing
- **Booking History**: Persistent storage of all bookings with detailed information
- **Booking Details Modal**: Comprehensive view of customer and event information
- **Booking Cancellation**: Safe booking deletion with confirmation prompts

### User Experience
- **Intuitive Navigation**: Clean navigation bar with active page highlighting
- **Visual Feedback**: Hover effects, transitions, and interactive elements
- **Error Handling**: Comprehensive form validation and user-friendly error messages
- **Data Persistence**: LocalStorage integration for booking history and session management

## Pages

1. **Home (index.html)** - Landing page with introduction and feature showcase
2. **Events (events.html)** - Browse all events with category filters and search
3. **Event Details (event-details.html)** - Detailed event information with booking option
4. **Booking (booking.html)** - Complete booking form with validation and date selection
5. **Confirmation (confirmation.html)** - Booking confirmation with unique booking ID
6. **My Bookings (my-bookings.html)** - Booking management dashboard with history
7. **Contact (contact.html)** - Contact information and message form

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- LocalStorage for data persistence

## Installation & Usage

### Option 1: Direct Browser Access

1. Clone this repository:
```bash
git clone https://github.com/vjonline/Ticket-Booking-Portal.git
cd Ticket-Booking-Portal/Frontend
```

2. Open `index.html` in your web browser

### Option 2: Local Server

Using Python:
```bash
python -m http.server 8000
```

Using Node.js (with http-server):
```bash
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## How to Use

### Booking Events
1. Start on the home page and click "Explore Events"
2. Browse events and use category filters (All, Music, Movies, Other)
3. Click on any event card to view detailed information
4. Click "Book Now" to proceed to the booking form
5. Fill in your booking details:
   - Full Name (required)
   - Email Address (required)
   - Number of Tickets (1-10)
   - Event Date (future dates only)
6. Submit the form to receive your booking confirmation with unique booking ID

### Managing Bookings
1. Navigate to "My Bookings" from the main menu
2. View all your booking history in card format
3. Click "View Booking" to see detailed booking and event information
4. Use "Cancel Booking" to remove bookings (with confirmation prompt)
5. Each booking displays:
   - Event name and image
   - Booking date and ticket count
   - Total price in rupees (₹)
   - Quick action buttons

### Booking Details Modal
- **Event Information**: Name, category, description, price per ticket
- **Customer Information**: Booking ID, name, email, event date, ticket count, booking date
- **Total Amount**: Prominently displayed final price
- **Actions**: Close modal or cancel booking directly

## Validation & Error Handling

### Date Validation
- Only current and future dates can be selected
- Past date selection shows error: "Error: Cannot select a past date. Please choose today or a future date."
- Form submission blocked until valid date is chosen

### Form Validation
- All required fields must be filled
- Email format validation
- Ticket quantity limits (1-10)
- Real-time error feedback

## File Structure

```
TicketHub/
│
├── index.html              # Home page with features showcase
├── events.html             # Events listing with category filters
├── event-details.html      # Detailed event information page
├── booking.html            # Booking form with validation
├── confirmation.html       # Booking confirmation with unique ID
├── my-bookings.html        # Booking management dashboard
├── contact.html            # Contact information and form
├── styles.css              # Comprehensive CSS styling
├── script.js               # Complete JavaScript functionality
├── assets/                 # Event images and media files
│   ├── rock-concert.jpg
│   ├── jazz-band-silhouette.jpg
│   ├── soumik-datta.jpg
│   ├── pop-concert-crowd.jpg
│   ├── movie-*.jpg
│   ├── harsh-gujral.jpg
│   ├── soccer-stadium.jpg
│   ├── saxophones.jpg
│   └── art-gallery.jpg
└── README.md              # Project documentation
```

## Code Statistics

- **Total Pages**: 7 HTML pages
- **CSS**: Comprehensive styling with responsive design
- **JavaScript**: 495+ lines with advanced functionality
- **Event Database**: 12 diverse events across 3 categories
- **No external dependencies**: Pure vanilla JavaScript
- **Local Storage Integration**: Persistent booking management

## Hosting on GitHub Pages

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to your repository on GitHub
3. Navigate to **Settings** → **Pages**
4. Under "Source", select the **main** branch
5. Click **Save**
6. Wait a few minutes for deployment
7. Your site will be live at: `https://yourusername.github.io/tickethub/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features Breakdown

### Event Management
- **12 Diverse Events**: Music concerts, movies, theater, sports, and art exhibitions
- **Category Filtering**: Dynamic filtering with visual feedback (Music, Movies, Other)
- **Event Details**: Comprehensive information with high-quality images
- **Price Display**: Professional rupees symbol (₹) formatting

### Advanced Booking System
1. **Event Selection**: Browse and select from categorized events
2. **Detailed View**: Comprehensive event information before booking
3. **Form Validation**: Real-time validation with error handling
4. **Date Selection**: Calendar with past date prevention
5. **Unique ID Generation**: Auto-generated booking identifiers
6. **Confirmation**: Detailed booking summary with ID

### Booking Management Dashboard
- **Booking History**: Persistent storage of all bookings
- **Clean Interface**: Card-based layout with essential information
- **Detailed Modal**: Comprehensive booking and event details
- **Safe Cancellation**: Confirmation prompts before deletion
- **Real-time Updates**: Immediate UI updates after actions

### Data Architecture
- **LocalStorage Integration**: Persistent booking history across sessions
- **Event Database**: Structured event data with comprehensive information
- **Session Management**: Maintains state across page navigation
- **Error Recovery**: Graceful handling of missing or corrupted data

## Event Database

The system includes 12 carefully curated events:

### Music Events (4)
- Rock Music Festival - ₹2,500
- Jazz Night Live - ₹1,800  
- Classical Symphony - ₹2,200
- Pop Concert Spectacular - ₹3,000

### Movies (4)
- Action Movie Premiere - ₹500
- Comedy Film Screening - ₹400
- Horror Movie Marathon - ₹800
- Romantic Drama - ₹450

### Other Events (4)
- Theater Play: Shakespeare - ₹1,500
- Stand-up Comedy Show - ₹1,200
- Football Championship - ₹2,800
- Art Exhibition - ₹350

## Customization

### Adding New Events

Edit `script.js` and add to the `events` array:

```javascript
{
    id: 13,
    name: "Your Event Name",
    category: "music", // "music", "movies", or "other"
    description: "Detailed event description",
    price: 1500, // Price in rupees
    img: "assets/your-image.jpg"
}
```

### Styling Customization

Key CSS variables in `styles.css`:
- **Primary Blue**: `#3498db` - Main theme color
- **Secondary Blue**: `#2980b9` - Hover states
- **Success Green**: `#27ae60` - Confirmations and prices
- **Warning Gold**: `#f1c40f` - Booking IDs and highlights
- **Error Red**: `#e74c3c` - Error messages and cancel buttons
- **Dark Background**: `#0f0c29` to `#24243e` - Gradient backgrounds

### Booking ID Format

Customize the booking ID format in the `generateBookingId()` function:
- Current format: `TH-YYYYMMDD-XXXX###`
- TH = TicketHub prefix
- YYYYMMDD = Date
- XXXX = Random 4-digit number
- ### = Timestamp suffix for uniqueness

## Technical Achievements

### Code Quality
- **Modular JavaScript**: Well-organized functions with single responsibilities
- **Error Handling**: Comprehensive validation and graceful error recovery
- **Performance**: Optimized DOM manipulation and efficient event handling
- **Accessibility**: Semantic HTML and keyboard navigation support

### Advanced Features
- **Unique ID Generation**: Collision-resistant booking ID algorithm
- **Modal System**: Custom modal implementation without external libraries
- **State Management**: Robust LocalStorage integration with data validation
- **Responsive Design**: Mobile-first approach with flexible layouts

### User Experience
- **Intuitive Interface**: Clean, modern design with consistent styling
- **Real-time Feedback**: Immediate validation and visual feedback
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Professional Polish**: Attention to detail in animations and interactions

### Data Management
- **Persistent Storage**: Reliable booking history across browser sessions
- **Data Integrity**: Validation and error recovery for corrupted data
- **Scalable Architecture**: Easy to extend with new events and features
- **Performance Optimization**: Efficient data structures and algorithms

## Project Highlights

- ✅ **Complete Booking System**: End-to-end ticket booking workflow
- ✅ **Professional UI/UX**: Modern, responsive design with smooth interactions
- ✅ **Robust Validation**: Comprehensive form and date validation
- ✅ **Unique Booking IDs**: Professional booking identification system
- ✅ **Booking Management**: Full CRUD operations for booking history
- ✅ **Error Handling**: Graceful error recovery and user feedback
- ✅ **Mobile Responsive**: Optimized for all device sizes
- ✅ **No Dependencies**: Pure vanilla JavaScript implementation

## License

This project is open source and available for personal and educational use.

## Contact

For issues or suggestions, please open an issue on GitHub.
