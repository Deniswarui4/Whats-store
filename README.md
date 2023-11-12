---

# Commercency
Ecommerce, simple.

## How do I use it?
1. Create a copy of [this spreadsheet](https://docs.google.com/spreadsheets/d/1Q_mDN1w88zE1vDasru-f3D6kxZAynUC1s253yLmjE7M/edit?usp=sharing).
2. Once copied, tap on `File > Publish to the web`, select `Comma Separated Values (.csv)` from the drop-down menu and click on `publish`.
3. Make sure that instead of `Web page` it says `Comma separated values (.csv)` and copy the link.
4. Fill [this file](./.env.example) and fill in your store details and rename it to `.env.local`.
5. Publish the site on [some hosting that supports NextJS](https://vercel.com)

# ALL
* Check if you should bring the fields as a Record<string, string> or as an array.
* Check if CartDrawer should be a single component or split further
* If I don't have fields, the Details component should show me the complete order button
* Store data via sheet
* Search
* Sections by category
