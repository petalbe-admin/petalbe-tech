// Klaro Configuration for Google Analytics
// This configuration manages cookie consent for tech.petalbe.com

var klaroConfig = {
    // Cookie settings
    elementID: 'klaro',
    storageMethod: 'cookie',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 365,
    
    // Privacy policy link
    privacyPolicy: '/privacypolicy.html',
    
    // Default state - false means users must actively consent
    default: false,
    
    // Consent modal settings
    mustConsent: false,  // false = users can dismiss banner without choosing
    acceptAll: true,     // Show "Accept All" button
    hideDeclineAll: false, // Show "Decline All" button
    
    // Language
    lang: 'en',
    
    // Translations
    translations: {
        de: {
            consentModal: {
                description: 'Hier können Sie einsehen und anpassen, welche Informationen wir über Sie sammeln.',
            },
            googleAnalytics: {
                description: 'Sammlung von Besucherstatistiken',
            },
            purposes: {
                analytics: 'Besucher-Statistiken',
            },
        },
        en: {
            consentModal: {
                description: 'Here you can see and customize the information that we collect about you.',
            },
            googleAnalytics: {
                description: 'Collection of visitor statistics',
            },
            purposes: {
                analytics: 'Visitor statistics',
            },
        },
    },
    
    // Services/Apps configuration
    apps: [
        {
            name: 'googleAnalytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            
            // Consent settings
            default: false,
            required: false,
            optOut: false,
            onlyOnce: true,
            
            // Cookies to delete when consent is withdrawn
            cookies: [
                '_ga',
                '_gat',
                '_gid',
                '_gat_gtag_G_VM630Y7XLR',
            ],
            
            // Callback function - loads GA only when user consents
            callback: function(consent, app) {
                console.log('Google Analytics consent status:', consent);
                
                if (consent) {
                    // User gave consent - load Google Analytics
                    console.log('Loading Google Analytics...');
                    
                    // 1. Load the gtag.js script
                    var script = document.createElement('script');
                    script.async = true;
                    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-VM630Y7XLR';
                    document.head.appendChild(script);
                    
                    // 2. Initialize gtag
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-VM630Y7XLR', {
                        'anonymize_ip': true  // Additional privacy protection
                    });
                    
                    console.log('Google Analytics loaded successfully');
                } else {
                    // User declined or withdrew consent
                    console.log('Google Analytics NOT loaded - user declined consent');
                    
                    // Disable GA if it was previously loaded
                    if (window.gtag) {
                        window['ga-disable-G-VM630Y7XLR'] = true;
                        console.log('Google Analytics disabled');
                    }
                }
            },
        },
    ],
};