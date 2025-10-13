# TicketHub - Event Ticketing System

A simple and elegant event ticketing system built with plain HTML, CSS, and JavaScript. Users can browse events, filter by category, and book tickets online.

## Features

- **Browse Events**: View all available events across different categories
- **Category Filters**: Filter events by Music, Movies, or Other categories
- **Event Details**: View detailed information about each event
- **Date Validation**: Built-in calendar with past date validation
- **Booking System**: Complete booking flow with confirmation page
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Pages

1. **Home (index.html)** - Landing page with introduction and features
2. **Events (events.html)** - Browse all events with category filters
3. **Event Details (event-details.html)** - Detailed information about selected event
4. **Booking (booking.html)** - Book tickets with date selection and form validation
5. **Confirmation (confirmation.html)** - Booking confirmation with summary

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- LocalStorage for data persistence

## Installation & Usage

### Option 1: Direct Browser Access

1. Clone this repository:
```bash
git clone https://github.com/yourusername/tickethub.git
cd tickethub
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

1. Start on the home page and click "Explore Events"
2. Browse events and use category filters (All, Music, Movies, Other)
3. Click on any event card to view details
4. Click "Book Now" to proceed to booking
5. Fill in your details:
   - Full Name
   - Email Address
   - Number of Tickets (1-10)
   - Event Date
6. Select a date (past dates will show an error)
7. Submit the form to see your booking confirmation

## Date Validation Rules

- Only current and future dates can be selected
- If a past date is entered, an error message appears: "Error: Cannot select a past date. Please choose today or a future date."
- The booking form cannot be submitted until a valid date is chosen

## File Structure

```
tickethub/
│
├── index.html              # Home page
├── events.html             # Events listing with filters
├── event-details.html      # Event details page
├── booking.html            # Booking form page
├── confirmation.html       # Booking confirmation page
├── styles.css              # All CSS styles (69 lines)
├── script.js               # JavaScript functionality (290 lines)
└── README.md              # This file
```

## Code Statistics

- **Total Pages**: 5 HTML pages
- **CSS**: 69 lines (optimized)
- **JavaScript**: 290 lines (under 500 line requirement)
- **No external dependencies**: Pure vanilla JavaScript

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

### Event Filtering
- Filter events by category: Music, Movies, Other
- Dynamic filtering without page reload
- Visual feedback with active filter highlighting

### Booking Flow
1. Select event from events page
2. View event details
3. Fill booking form with personal information
4. Select valid date from calendar
5. Receive confirmation with booking summary

### Data Persistence
- Uses LocalStorage to maintain selected event across pages
- Stores booking data temporarily for confirmation display

## Customization

### Adding New Events

Edit `script.js` and add to the `events` array:

```javascript
{
    id: 13,
    name: "Your Event Name",
    category: "music", // or "movies" or "other"
    description: "Event description",
    price: 50,
    icon: "🎵"
}
```

### Styling

All styles are in `styles.css`. Key color variables:
- Primary Blue: `#3498db`
- Dark Background: `#2c3e50`
- Success Green: `#27ae60`
- Error Red: `#e74c3c`

## License

This project is open source and available for personal and educational use.

## Contact

For issues or suggestions, please open an issue on GitHub.
