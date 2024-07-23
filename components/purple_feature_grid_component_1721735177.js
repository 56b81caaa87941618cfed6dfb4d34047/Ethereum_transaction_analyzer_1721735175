/* Summary: HTML file that describes a list of features.
It contains a grid layout with 6 feature sections, each with an icon, a title, and a description. 
The feature sections are organised in a grid of two rows, each with three columns.
*/

Vue.component("purple_feature_grid_component_1721735177", {
    template: `
    <!-- Features list -->
    <div id="features-grid" class="grid md:grid-cols-3 gap-8 md:gap-12 bg-white p-5">
        <!-- Feature -->
        <div id="feature-1">
            <div id="feature-1-header" class="flex items-center space-x-2 mb-1">
                <svg id="feature-1-icon" class="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z" /></svg>
                <div class="flex" id="feature-1-title-container"><h4 id="feature-1-title" class="flex-1 text-slate-50 font-medium">Real-Time Transaction Tracking</h4></div>
            </div>
            <div class="flex" id="feature-1-description-container"><p id="feature-1-description" class="flex-1 text-sm">Stay up-to-date with the latest Ethereum transactions as they occur. Our app provides live monitoring and analysis of new transactions on the network.</p></div>
        </div>
        <!-- Feature -->
        <div id="feature-2">
            <div id="feature-2-header" class="flex items-center space-x-2 mb-1">
                <svg id="feature-2-icon" class="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" /></svg>
                <div class="flex" id="feature-2-title-container"><h4 id="feature-2-title" class="flex-1 text-slate-50 font-medium">In-Depth Transaction Details</h4></div>
            </div>
            <div class="flex" id="feature-2-description-container"><p id="feature-2-description" class="flex-1 text-sm">Gain comprehensive insights into each transaction with detailed information including sender, recipient, value transferred, gas fees, and more.</p></div>
        </div>
        <!-- Feature -->
        <div id="feature-3">
            <div id="feature-3-header" class="flex items-center space-x-2 mb-1">
                <svg id="feature-3-icon" class="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M14 0a2 2 0 0 1 2 2v4a1 1 0 0 1-2 0V2H2v12h4a1 1 0 0 1 0 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm-1.957 10.629 3.664 3.664a1 1 0 0 1-1.414 1.414l-3.664-3.664-.644 2.578a.5.5 0 0 1-.476.379H9.5a.5.5 0 0 1-.48-.362l-2-7a.5.5 0 0 1 .618-.618l7 2a.5.5 0 0 1-.017.965l-2.578.644Z"/></svg>
                <div class="flex" id="feature-3-title-container"><h4 id="feature-3-title" class="flex-1 text-slate-50 font-medium">Advanced Analytics</h4></div>
            </div>
            <div class="flex" id="feature-3-description-container"><p id="feature-3-description" class="flex-1 text-sm">Leverage our powerful analytical tools to identify patterns, trends, and potential irregularities within transaction data.</p></div>
        </div>
        <!-- Feature -->
        <div id="feature-4">
            <div id="feature-4-header" class="flex items-center space-x-2 mb-1">
                <svg id="feature-4-icon" class="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z"/></svg>
                <div class="flex" id="feature-4-title-container"><h4 id="feature-4-title" class="flex-1 text-slate-50 font-medium">Customizable Alerts</h4></div>
            </div>
            <div class="flex" id="feature-4-description-container"><p id="feature-4-description" class="flex-1 text-sm">Set up personalized alerts to notify you of specific transaction events, such as high-value transfers or transactions from known addresses.</p></div>
        </div>
        <!-- Feature -->
        <div id="feature-5">
            <div id="feature-5-header" class="flex items-center space-x-2 mb-1">
                <svg id="feature-5-icon" class="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z"/></svg>
                <div class="flex" id="feature-5-title-container"><h4 id="feature-5-title" class="flex-1 text-slate-50 font-medium">Data Visualization</h4></div>
            </div>
            <div class="flex" id="feature-5-description-container"><p id="feature-5-description" class="flex-1 text-sm">Explore transaction data through intuitive charts and graphs, enabling you to visualize trends and extract meaningful insights effortlessly.</p></div>
        </div>
        <!-- Feature -->
        <div id="feature-6">
            <div id="feature-6-header" class="flex items-center space-x-2 mb-1">
                <svg id="feature-6-icon" class="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M14.574 5.67a13.292 13.292 0 0 1 1.298 1.842 1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14a6.391 6.391 0 0 1-1.557-.2l1.815-1.815C10.97 11.82 13.06 9.13 13.82 8c-.163-.243-.39-.56-.669-.907l1.424-1.424ZM.294 15.706a.999.999 0 0 1-.002-1.413l2.53-2.529C1.171 10.291.197 8.615.127 8.49a.998.998 0 0 1-.002-.975C.251 7.29 3.246 2 8 2c1.331 0 2.515.431 3.548 1.038L14.293.293a.999.999 0 1 1 1.414 1.414l-14 14a.997.997 0 0 1-1.414 0ZM2.18 8a12.603 12.603 0 0 0 2.06 2.347l1.833-1.834A1.925 1.925 0 0 1 6 8a2 2 0 0 1 2-2c.178 0 .348.03.512.074l1.566-1.566C9.438 4.201 8.742 4 8 4 5.146 4 2.958 6.835 2.181 8Z"/></svg>
                <div class="flex" id="feature-6-title-container"><h4 id="feature-6-title" class="flex-1 text-slate-50 font-medium">Secure and Reliable</h4></div>
            </div>
            <div class="flex" id="feature-6-description-container"><p id="feature-6-description" class="flex-1 text-sm">Our app prioritizes security and reliability, ensuring your transaction monitoring and analysis are conducted in a safe and trustworthy environment.</p></div>
        </div>
    </div>`,
        data() {
            return {
                expanded: false, 
                tab: null,
            };
        },
    });
                    