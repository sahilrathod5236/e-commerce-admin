# Full Stack E-Commerce Store + Dashboard & CMS: Next.js 14, React JS, Typescript, Tailwind CSS, Prisma, MongoDB, Stripe

Description : 

- This project contains both, the Admin Dashboard and the Store.
- The Store is managed via the Admin Dashboard.
- Creating the store and dashboard, categories, products, etc. related to the store is 
done in the Admin Dashboard.
- The Store shows the related billboard and the featured products. 
- The Store features a cart which shows the products in cart and total price of all 
products in the cart and on checkout redirects to a stripe checkout session.


Key Features:

- Fully responsive design and beautiful UI, created using Tailwind CSS and Shadcn UI 
- Authentication using Clerk 
- The Admin dashboard is going to serve as both CMS, Admin and API
- User will be able to control multiple vendors / stores through this single CMS 
- User will be able to create, update and delete categories
- User will be able to create, update and delete products
- User will be able to create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form.
- User will be able to create, update and delete "Billboards" which are these big texts on top of the page. User will be able to attach them to a single category, or use them standalone (The Admin dashboard generates API for all of those cases)
- User will be able to Search through all categories, products, sizes, colors, billboards with included pagination
- User will be able to control which products are "featured" so they show on the homepage
- User will be able to see orders, sales and total products in stock
- User will be able to see graphs of revenue generated monthly
- Order creation
- Stripe checkout session
- MongoDB database
- ORM using Prisma