document.addEventListener('DOMContentLoaded', function() {
    // Initialize or increment review counter
    let reviewCount = localStorage.getItem('reviewCount');
    
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }
    
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    
    // Display the count
    document.getElementById('count').textContent = reviewCount;
    
    // Parse URL parameters to display submitted data (optional)
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('productName');
    const rating = urlParams.get('rating');
    
    // You could display these values if you wanted to show a summary
    // For now, we're just showing the count as per requirements
});