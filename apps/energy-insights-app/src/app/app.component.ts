import { Component } from '@angular/core';

@Component({
  selector: 'nrg-root',
  template: `

  <header class="flex">
      <svg width="40" height="40" viewBox="0 0 262 163"><polygon id="Path" fill="#ffffff" points="130.68 104.59 97.49 52.71 97.44 96.3 40.24 0 0 0 0 162.57 39.79 162.57 39.92 66.39 96.53 158.26"></polygon><polygon id="Path" fill="#ffffff" points="97.5 41.79 137.24 41.79 137.33 41.33 137.33 0 97.54 0 97.49 41.33"></polygon><path d="M198.66,86.86 C189.139872,86.6795216 180.538723,92.516445 177.19,101.43 C182.764789,93.0931021 193.379673,89.7432211 202.73,93.37 C207.05,95.13 212.73,97.97 217.23,96.45 C212.950306,90.4438814 206.034895,86.8725952 198.66,86.86 L198.66,86.86 Z" id="Path" fill="#96D8E9"></path><path d="M243.75,106.42 C243.75,101.55 241.1,100.42 235.6,98.42 C231.52,97 226.89,95.4 223.52,91 C222.86,90.13 222.25,89.15 221.6,88.11 C220.14382,85.4164099 218.169266,83.037429 215.79,81.11 C212.58,78.75 208.37,77.6 202.91,77.6 C191.954261,77.6076705 182.084192,84.2206169 177.91,94.35 C183.186964,87.0278244 191.956716,83.0605026 200.940147,83.9314609 C209.923578,84.8024193 217.767888,90.3805017 221.54,98.58 C223.424615,101.689762 227.141337,103.174819 230.65,102.22 C236.02,101.07 235.65,106.15 243.76,107.87 L243.75,106.42 Z" id="Path" fill="#48C4E5"></path><path d="M261.46,105.38 L261.46,105.27 C261.34,73.03 235.17,45.45 202.91,45.45 C183.207085,45.4363165 164.821777,55.3450614 154,71.81 L153.79,71.45 L137.23,45.45 L97.5,45.4499858 L135.25,104.57 L98.41,162.57 L137,162.57 L153.79,136.78 L170.88,162.57 L209.48,162.57 L174.48,107.49 C173.899005,106.416838 173.583536,105.220114 173.56,104 C173.557346,96.2203871 176.64661,88.7586448 182.147627,83.2576275 C187.648645,77.7566101 195.110387,74.6673462 202.89,74.67 C219.11,74.67 221.82,84.37 225.32,88.93 C232.23,97.93 246.03,93.99 246.03,105.73 L246.03,105.73 C246.071086,108.480945 247.576662,111.001004 249.979593,112.340896 C252.382524,113.680787 255.317747,113.636949 257.679593,112.225896 C260.041438,110.814842 261.471086,108.250945 261.43,105.5 L261.43,105.5 L261.43,105.38 L261.46,105.38 Z" id="Path" fill="#ffffff"></path><path d="M261.5,113.68 C261.892278,116.421801 261.504116,119.218653 260.38,121.75 C258.18,126.84 254.51,125.14 254.51,125.14 C254.51,125.14 251.35,123.6 253.27,120.65 C255.4,117.36 259.61,117.74 261.5,113.68 Z" id="Path" fill="#022f56"></path></svg>
      <h1>Welcome to {{title}}!</h1>
  </header>
  <main>
      <h2>Resources &amp; Tools</h2>
      <p>
        Thank you for using and showing some ♥ for Nx.
      </p>
      <div class="flex github-star-container">
        <a href="https://github.com/nrwl/nx" target="_blank" rel="noopener noreferrer"> If you like Nx, please give it a star:
          <div class="github-star-badge">
            <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              Star
          </div>
        </a>
      </div>
      <p>
        Here are some links to help you get started.
      </p>
      <ul class="resources">
          <li class="col-span-2">
              <a
                      class="resource flex"
                      href="https://nxplaybook.com/p/nx-workspaces"
              >
                  Nx video course
              </a>
          </li>
          <li class="col-span-2">
              <a
                      class="resource flex"
                      href="https://nx.dev/latest/angular/getting-started/intro"
              >
                  Nx video tutorial
              </a>
          </li>
          <li class="col-span-2">
              <a
                      class="resource flex"
                      href="https://nx.dev/latest/angular/tutorial/01-create-application"
              >
                  Interactive tutorial
              </a>
          </li>
          <li class="col-span-2">
              <a class="resource flex" href="https://nx.app/">
                  <svg width="36" height="36" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M120 15V30C103.44 30 90 43.44 90 60C90 76.56 76.56 90 60 90C43.44 90 30 103.44 30 120H15C6.72 120 0 113.28 0 105V15C0 6.72 6.72 0 15 0H105C113.28 0 120 6.72 120 15Z" fill="#0E2039"/>
                    <path d="M120 30V105C120 113.28 113.28 120 105 120H30C30 103.44 43.44 90 60 90C76.56 90 90 76.56 90 60C90 43.44 103.44 30 120 30Z" fill="white"/>
                  </svg>
                  <span class="gutter-left">Nx Cloud</span>
              </a>
          </li>
      </ul>
      <h2>Next Steps</h2>
      <p>Here are some things you can do with Nx.</p>
      <details open>
          <summary>Add UI library</summary>
          <pre>
  # Generate UI lib
  nx g @nrwl/angular:lib ui
  
  # Add a component
  nx g @nrwl/angular:component xyz --project ui</pre
          >
      </details>
      <details>
          <summary>View dependency graph</summary>
          <pre>nx dep-graph</pre>
      </details>
      <details>
          <summary>Run affected commands</summary>
          <pre>
  # see what's been affected by changes
  nx affected:dep-graph
  
  # run tests for current changes
  nx affected:test
  
  # run e2e tests for current changes
  nx affected:e2e
  </pre
          >
      </details>
  </main>
    
`,
,
  styles: [`

  /*
   * Remove template code below
   */
  :host {
    display: block;
    font-family: sans-serif;
    min-width: 300px;
    max-width: 600px;
    margin: 50px auto;
  }
  
  .gutter-left {
    margin-left: 9px;
  }
  
  .col-span-2 {
    grid-column: span 2;
  }
  
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  header {
    background-color: #143055;
    color: white;
    padding: 5px;
    border-radius: 3px;
  }
  
  main {
    padding: 0 36px;
  }
  
  p {
    text-align: center;
  }
  
  h1 {
    text-align: center;
    margin-left: 18px;
    font-size: 24px;
  }
  
  h2 {
    text-align: center;
    font-size: 20px;
    margin: 40px 0 10px 0;
  }
  
  .resources {
    text-align: center;
    list-style: none;
    padding: 0;
    display: grid;
    grid-gap: 9px;
    grid-template-columns: 1fr 1fr;
  }
  
  .resource {
    color: #0094ba;
    height: 36px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 3px 9px;
    text-decoration: none;
  }
  
  .resource:hover {
    background-color: rgba(68, 138, 255, 0.04);
  }
  
  pre {
    padding: 9px;
    border-radius: 4px;
    background-color: black;
    color: #eee;
  }
  
  details {
    border-radius: 4px;
    color: #333;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 3px 9px;
    margin-bottom: 9px;
  }
  
  summary {
    cursor: pointer;
    outline: none;
    height: 36px;
    line-height: 36px;
  }
  
  .github-star-container {
    margin-top: 12px;
    line-height: 20px;
  }
  
  .github-star-container a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
  }
  
  .github-star-badge {
    color: #24292e;
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 3px 10px;
    border: 1px solid rgba(27,31,35,.2);
    border-radius: 3px;
    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
    margin-left: 4px;
    font-weight: 600;
  }
  
  .github-star-badge:hover {
    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);
    border-color: rgba(27,31,35,.35);
    background-position: -.5em;
  }
  .github-star-badge .material-icons {
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
    
`],

})
export class AppComponent {
  title = 'energy-insights-app';
}
