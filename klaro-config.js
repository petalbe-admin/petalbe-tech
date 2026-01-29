// Klaro configuration
var klaroConfig = {
    // We use a cookie to remember the user's consent choices
    cookieName: 'klaro-consent',
    
    // How long the consent cookie should last (in days)
    cookieExpiresAfterDays: 365,
    
    // Your privacy policy URL
    privacyPolicy: '/privacypolicy.html',
    
    // Default state - false means cookies are OFF by default (recommended for GDPR)
    default: false,
    
    // Make the consent banner show up on page load
    mustConsent: true,
    
    // Position of the consent notice
    position: 'bottom-right', // Options: 'top', 'bottom', 'bottom-left', 'bottom-right'
    
    // Language translations
    translations: {
        en: {
            consentNotice: {
                description: 'We use cookies to improve your experience on our website. You can customize your preferences below.',
            },
            purposes: {
                analytics: 'Analytics',
                marketing: 'Marketing',
            },
        },
    },
    
    // List of services/cookies you use
    services: [
        {
            name: 'google-analytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            required: false,
            optOut: false,
            default: false,
            description: 'We use Google Analytics to understand how visitors use our website.',
        },
        // Add more services here if you use other tracking tools
    ],
};
