# ServiceDetailsArea Component

This is a consolidated, reusable component that replaces all the duplicate service-details components. It accepts data as props and renders the appropriate sections based on the configuration.

## Usage

```tsx
import ServiceDetailsArea from '../ServiceDetailsArea';

const serviceDetailsData = {
    title: "Your Service Title",
    subtitle: "Services", // optional
    description: "Your service description...",
    benefits: [
        "Benefit 1",
        "Benefit 2",
        "Benefit 3"
    ],
    services: [
        "Service 1",
        "Service 2",
        "Service 3"
    ],
    serviceData: yourServiceData, // from your data files
    showServiceCards: true,
    showProjects: true,
    showClients: true,
    showTechnologies: true,
    showMediaCoverage: true,
    showTestimonials: true,
    showBlog: true,
    showAgileApproach: true,
    showTechnologyPartners: true
};

const YourServicePage = () => {
    return <ServiceDetailsArea data={serviceDetailsData} />;
};
```

## Data Interface

```tsx
interface ServiceDetailsData {
    title: string;                    // Main service title
    subtitle?: string;                // Optional subtitle
    description: string;              // Service description
    benefits: string[];               // Array of benefits
    services: string[];               // Array of services
    image?: any;                      // Optional image for main section
    serviceData?: any[];              // Service data for cards
    showServiceCards?: boolean;       // Show service cards section
    showProjects?: boolean;           // Show projects section
    showClients?: boolean;            // Show clients section
    showTechnologies?: boolean;       // Show technologies section
    showMediaCoverage?: boolean;      // Show media coverage section
    showTestimonials?: boolean;       // Show testimonials section
    showBlog?: boolean;               // Show blog section
    showAgileApproach?: boolean;      // Show agile approach section
    showTechnologyPartners?: boolean; // Show technology partners section
}
```

## Common Sections

The following sections are now common across all service pages:

1. **Our Projects** - Displays project showcase
2. **Clients We've Served Thus Far** - Shows client logos
3. **Our Agile Approach** - Displays agile process image
4. **Our Technologies** - Shows technology stack
5. **Media Coverage** - Displays media coverage logos
6. **What Clients Say About Us** - Shows testimonials
7. **Our Technology Partners** - Shows technology partners
8. **Our Latest Insights** - Shows blog posts

## Migration Guide

To migrate from the old service-details components:

1. Replace the import:
   ```tsx
   // Old
   import ServiceDetailsArea from "./ServiceDetailsArea"
   
   // New
   import ServiceDetailsArea from '../ServiceDetailsArea';
   ```

2. Create a data object with your service-specific information

3. Pass the data as props:
   ```tsx
   // Old
   <ServiceDetailsArea />
   
   // New
   <ServiceDetailsArea data={serviceDetailsData} />
   ```

## Benefits

- **Reduced Code Duplication**: Single component instead of 8+ similar files
- **Easier Maintenance**: Changes only need to be made in one place
- **Consistent UI**: All service pages have the same structure and styling
- **Flexible Configuration**: Each service can customize which sections to show
- **Type Safety**: Full TypeScript support with proper interfaces
