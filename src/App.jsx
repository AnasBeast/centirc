import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isActive1, setActive1] = useState(true);
  const [isActive2, setActive2] = useState(true);
  const [isActive3, setActive3] = useState(true);
  const [isActive4, setActive4] = useState(true);
  const [isActive5, setActive5] = useState(true);
  const handleClick1 = (e) => {
      setActive1(!isActive1);
  }
  const handleClick2 = (e) => {
    setActive2(!isActive2);
  }
  const handleClick3 = (e) => {
    setActive3(!isActive3);
  }
  const handleClick4 = (e) => {
    setActive4(!isActive4);
  }
  const handleClick5 = (e) => {
    setActive5(!isActive5);
  }

  return (
    <div className="App">
      {/* <Header/> */}
      <header className="bg-white h-36 sm:h-44 md:h-52 w-full flex items-center justify-center">
        <svg width="223" height="105" viewBox="0 0 223 105" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M208.006 9.09551C202.652 5.06136 196.303 2.55886 189.637 1.85587C188.406 1.78367 187.118 1.71726 185.761 1.65373C182.859 1.53995 179.958 1.89092 177.167 2.69332C166.127 5.75147 157.759 14.9144 153.355 20.6495C151.431 23.1561 150.25 25.01 149.947 25.3825C149.563 25.8532 148.284 27.5281 146.603 29.7373C143.201 34.2133 138.136 40.9129 135.384 44.5024C133.882 46.839 132.217 49.0662 130.4 51.1674C124.89 57.5061 119.819 60.0993 116.25 61.1302C114.535 61.5347 112.779 61.742 111.017 61.7482C104.89 61.7482 99.0139 59.3142 94.6814 54.9817C90.3489 50.6492 87.915 44.7731 87.915 38.646C87.9188 32.5215 90.3545 26.6491 94.6866 22.3197C99.0186 17.9903 104.893 15.5583 111.017 15.5583C112.564 15.5573 114.107 15.7121 115.623 16.0204L115.759 16.0492C115.993 16.0983 116.221 16.1705 116.452 16.2283C116.822 16.3178 117.162 16.468 117.523 16.5748C119.784 17.3718 132.029 21.4667 138.584 34.6667L147.175 23.3842C139.427 10.7906 130.085 6.22218 122.629 3.67228C118.757 2.33831 114.691 1.65525 110.596 1.65084C100.788 1.64037 91.3762 5.51907 84.4237 12.4367L84.3948 12.4569C80.9728 15.2753 76.7393 20.508 71.7753 27.8544C69.0145 31.9435 66.0228 36.691 62.8232 42.0536V42.0767C62.7134 42.2644 62.6066 42.4377 62.494 42.6254C61.5208 44.257 60.5187 45.7471 59.5051 47.1476C57.8674 49.4156 56.0406 51.5409 54.0443 53.5007C45.2684 61.4796 30.2809 69.0398 4.42383 58.0114C10.8231 69.2304 22.4377 75.982 36.2788 75.982C41.4756 75.9829 46.6144 74.8898 51.3609 72.7738C56.1073 70.6578 60.3552 67.5663 63.8281 63.7003C63.8916 63.6455 63.9667 63.5992 64.0245 63.5444C66.9122 60.7461 72.2315 52.9983 74.8969 49.0045C77.1106 56.7723 81.7947 63.6074 88.2402 68.4751C94.6857 73.3428 102.542 75.9781 110.619 75.982C110.876 75.982 111.124 75.9502 111.381 75.9445C111.638 75.9387 111.959 75.9445 112.262 75.9445C130.668 75.4997 140.851 61.4681 143.089 58.1616C143.857 57.0238 146.629 53.3246 150.019 48.8427C154.868 42.4319 167.057 26.272 167.473 25.6655C171.655 19.7658 176.272 17.4238 180.162 16.3178C180.693 16.185 181.213 16.029 181.756 15.9309C183.084 15.6893 184.431 15.5646 185.781 15.5583C190.133 15.5675 194.392 16.8123 198.063 19.1478C201.365 21.2228 204.086 24.1015 205.973 27.5146C207.859 30.9277 208.849 34.7636 208.849 38.6634C208.849 44.7904 206.415 50.6666 202.083 54.999C197.75 59.3315 191.874 61.7655 185.747 61.7655C183.393 61.7655 183.676 61.6702 183.676 61.6702C183.676 61.6702 166.549 60.6537 158.365 43.1163L149.733 54.4508C156.664 63.3134 164.193 71.7774 179.859 75.4997C181.753 75.9502 183.737 76.0109 185.747 76.0109C195.605 76.0109 205.059 72.095 212.03 65.1247C219.001 58.1543 222.917 48.7004 222.918 38.8424C222.918 33.0668 221.568 27.3711 218.976 22.2095C216.385 17.0479 212.623 12.5632 207.991 9.11283" fill="#0D5954"/>
          <path d="M27.2141 40.2274C53.2329 36.6091 65.4511 24.44 70.2679 17.44C66.4185 12.0399 59.6467 6.02469 53.129 3.17446C43.9094 -0.854053 33.4674 -1.05609 24.0989 2.61278C14.7304 6.28165 7.20254 13.521 3.17059 22.7391C1.00872 27.6815 -0.0710814 33.0292 0.00362837 38.4232C0.0783382 43.8173 1.30583 49.133 3.60375 54.0136C18.7732 60.0779 29.8622 60.54 37.818 58.6341L38.0404 58.5792C38.4938 58.4666 38.9298 58.3395 39.363 58.2124C39.7962 58.0854 40.2033 57.9583 40.6018 57.8197L40.8155 57.7446C52.5168 53.5862 56.242 44.4609 56.242 44.4609C42.9178 55.2121 29.2847 53.5516 21.2076 51.6139C18.5884 50.9179 13.3124 49.0582 12.2988 48.1486C12.2988 48.1486 8.03359 28.4569 25.3371 16.49C38.5111 7.37328 51.3732 13.5011 55.9474 16.282C56.3315 16.5333 57.5791 17.5324 56.6896 19.4586C48.5808 34.0043 27.2344 40.2505 27.2344 40.2505" fill="#4DBA7A"/>
          <path d="M33.3189 85.8755C34.8477 85.8624 36.369 86.0905 37.8267 86.5513C39.1507 86.9665 40.4003 87.5894 41.5289 88.3966L41.6617 88.5034L41.7974 88.6102H41.8407C41.9203 88.6991 41.968 88.8118 41.9764 88.9308C41.9764 89.1907 41.8119 89.3206 41.4826 89.3206C41.3992 89.3284 41.3151 89.3163 41.2372 89.2851C41.1594 89.254 41.0901 89.2048 41.035 89.1416C40.0035 88.3621 38.8515 87.7563 37.6246 87.3483C36.2639 86.8993 34.8413 86.6664 33.4085 86.6581H33.3189C32.1109 86.6477 30.9134 86.8825 29.7987 87.3483C28.7332 87.7921 27.7598 88.4306 26.9283 89.2311C26.1046 90.026 25.4418 90.9721 24.9762 92.0178C24.4964 93.0904 24.2522 94.2533 24.26 95.4283C24.2519 96.6023 24.4961 97.7644 24.9762 98.8358C25.4382 99.8785 26.1016 100.82 26.9283 101.605C27.7636 102.397 28.7364 103.029 29.7987 103.471C30.9132 103.937 32.1107 104.173 33.3189 104.164H33.3651C34.82 104.175 36.2668 103.946 37.6477 103.488C38.907 103.075 40.0811 102.437 41.113 101.605C41.2176 101.532 41.3435 101.495 41.4711 101.501C41.8003 101.501 41.9649 101.631 41.9649 101.891C41.9681 101.947 41.9573 102.002 41.9337 102.053C41.91 102.103 41.874 102.147 41.8292 102.18C40.6782 103.081 39.3811 103.777 37.9942 104.239C36.4846 104.748 34.9004 105 33.3074 104.987C31.7068 104.999 30.1153 104.747 28.5974 104.239C27.2078 103.784 25.9096 103.087 24.7625 102.18C23.7095 101.35 22.8329 100.318 22.1837 99.1448C21.5596 98.008 21.2356 96.7309 21.2423 95.434C21.237 94.1319 21.5608 92.8495 22.1837 91.7059C22.8273 90.5282 23.7049 89.4944 24.7625 88.668C25.9141 87.7723 27.2114 87.0817 28.5974 86.6263C30.1192 86.1178 31.7145 85.8641 33.3189 85.8755Z" fill="black"/>
          <path d="M54.3794 86.4984C54.6658 86.2719 55.0222 86.1524 55.3872 86.1605H67.0942C67.4234 86.1605 67.5881 86.2934 67.5881 86.5533C67.5881 86.8132 67.4234 86.9431 67.0942 86.9431H56.8687V95.0289H64.8534C65.1421 95.0289 65.3009 95.1588 65.3009 95.4187C65.3009 95.6786 65.1508 95.8086 64.8534 95.8086H56.8687V103.871H67.0942C67.4234 103.871 67.5881 104.001 67.5881 104.261C67.5881 104.521 67.4234 104.651 67.0942 104.651H55.3786C55.0135 104.659 54.6571 104.54 54.3707 104.313C54.2413 104.224 54.1351 104.105 54.0608 103.966C53.9865 103.828 53.9462 103.673 53.9434 103.516V87.333C53.9438 87.1691 53.9837 87.0077 54.0596 86.8625C54.1355 86.7173 54.2452 86.5924 54.3794 86.4984Z" fill="black"/>
          <path d="M80.3725 88.788V104.272C80.3725 104.532 80.2079 104.662 79.8787 104.662C79.5495 104.662 79.3849 104.532 79.3849 104.272V87.3672C79.3815 87.1421 79.4491 86.9215 79.5782 86.737C79.7073 86.5524 79.8912 86.4132 80.1039 86.3392C80.4291 86.1739 80.8008 86.124 81.158 86.1977C81.5106 86.2572 81.8335 86.4318 82.0763 86.6944L95.6661 102.034V86.5529C95.6661 86.293 95.8163 86.1602 96.1166 86.1602C96.4169 86.1602 96.6104 86.293 96.6104 86.5529V103.562C96.6104 103.963 96.3708 104.284 95.8914 104.521C95.551 104.663 95.1759 104.7 94.8143 104.627C94.4643 104.578 94.1452 104.4 93.919 104.128L80.3725 88.788Z" fill="black"/>
          <path d="M115.761 86.9427H109.212C108.882 86.9427 108.721 86.8128 108.721 86.5529C108.721 86.293 108.882 86.1602 109.212 86.1602H125.262C125.591 86.1602 125.756 86.293 125.756 86.5529C125.756 86.8128 125.591 86.9427 125.262 86.9427H118.669V103.527C118.667 103.682 118.63 103.835 118.56 103.973C118.489 104.111 118.389 104.231 118.265 104.324C117.973 104.557 117.607 104.677 117.234 104.662C116.854 104.675 116.481 104.556 116.18 104.324C116.05 104.235 115.944 104.116 115.87 103.977C115.796 103.839 115.755 103.684 115.752 103.527L115.761 86.9427Z" fill="black"/>
          <path d="M137.246 87.3329C137.246 87.1698 137.284 87.0089 137.358 86.8638C137.433 86.7186 137.541 86.5933 137.673 86.4984C137.96 86.2723 138.316 86.1528 138.681 86.1605H146.712C147.611 86.1573 148.505 86.3016 149.357 86.5879C150.143 86.8444 150.879 87.2353 151.532 87.743C152.128 88.2143 152.62 88.8043 152.976 89.4757C153.33 90.1175 153.516 90.8389 153.516 91.5722C153.517 92.2231 153.371 92.8658 153.088 93.4521C152.796 94.0557 152.393 94.5985 151.899 95.0519C151.373 95.537 150.776 95.9383 150.128 96.2417C149.425 96.5691 148.676 96.79 147.908 96.8972L148.266 97.3246L152.392 103.005C152.488 103.166 152.535 103.352 152.528 103.539C152.526 103.694 152.489 103.846 152.419 103.985C152.349 104.123 152.248 104.243 152.124 104.336C151.832 104.569 151.466 104.689 151.093 104.674C150.857 104.687 150.62 104.646 150.403 104.553C150.185 104.46 149.991 104.319 149.837 104.14C149.835 104.125 149.83 104.111 149.822 104.099C149.814 104.087 149.803 104.077 149.791 104.07L144.633 96.9694H140.148V103.528C140.145 103.685 140.105 103.839 140.031 103.978C139.957 104.116 139.85 104.235 139.721 104.325C139.419 104.556 139.047 104.675 138.667 104.662C138.31 104.669 137.962 104.554 137.679 104.336C137.55 104.247 137.444 104.128 137.369 103.989C137.295 103.851 137.255 103.696 137.252 103.539V87.3329H137.246ZM140.163 96.1753H146.712C147.241 96.1771 147.763 96.0555 148.237 95.8201C148.715 95.5822 149.136 95.2433 149.47 94.8267C149.824 94.3826 150.104 93.8843 150.299 93.3511C150.512 92.7785 150.619 92.1717 150.614 91.5606C150.619 90.9477 150.512 90.339 150.299 89.7644C150.103 89.2324 149.823 88.7351 149.47 88.2917C149.136 87.8751 148.715 87.5361 148.237 87.2983C147.763 87.0629 147.241 86.9412 146.712 86.9431H140.163V96.184V96.1753Z" fill="black"/>
          <path d="M165.531 86.499C165.817 86.2724 166.174 86.153 166.539 86.1611C166.919 86.1482 167.291 86.2676 167.593 86.499C167.725 86.5944 167.833 86.7198 167.907 86.8649C167.981 87.0099 168.02 87.1705 168.02 87.3335V103.528C168.017 103.685 167.976 103.839 167.902 103.978C167.828 104.116 167.722 104.235 167.593 104.325C167.291 104.557 166.919 104.676 166.539 104.663C166.174 104.671 165.817 104.552 165.531 104.325C165.402 104.236 165.295 104.117 165.221 103.978C165.147 103.84 165.106 103.685 165.104 103.528V87.3335C165.103 87.1704 165.142 87.0095 165.216 86.8644C165.29 86.7192 165.398 86.5939 165.531 86.499Z" fill="black"/>
          <path d="M192.239 85.8755C193.768 85.8624 195.289 86.0905 196.747 86.5513C198.071 86.9665 199.32 87.5894 200.449 88.3966L200.582 88.5034L200.717 88.6102H200.761C200.839 88.6999 200.886 88.8122 200.896 88.9308C200.896 89.1907 200.732 89.3206 200.402 89.3206C200.319 89.3289 200.235 89.317 200.157 89.2858C200.079 89.2546 200.01 89.2052 199.955 89.1416C198.923 88.3621 197.771 87.7563 196.544 87.3483C195.184 86.8993 193.761 86.6664 192.328 86.6581H192.239C191.031 86.6477 189.833 86.8825 188.719 87.3483C187.653 87.7921 186.68 88.4306 185.848 89.2311C185.023 90.0252 184.361 90.9715 183.896 92.0178C183.415 93.0902 183.17 94.2531 183.177 95.4283C183.165 96.6055 183.406 97.7717 183.884 98.8474C184.346 99.8905 185.009 100.832 185.837 101.617C186.672 102.408 187.645 103.04 188.707 103.482C189.821 103.949 191.019 104.185 192.227 104.175H192.273C193.728 104.186 195.175 103.958 196.556 103.5C197.815 103.086 198.989 102.448 200.021 101.617C200.126 101.543 200.252 101.507 200.379 101.513C200.709 101.513 200.873 101.643 200.873 101.903C200.876 101.958 200.865 102.014 200.841 102.064C200.818 102.114 200.782 102.158 200.737 102.191C199.587 103.092 198.289 103.789 196.902 104.25C195.393 104.759 193.809 105.012 192.216 104.998C190.615 105.011 189.024 104.758 187.506 104.25C186.116 103.795 184.818 103.098 183.671 102.191C182.617 101.362 181.74 100.33 181.092 99.1564C180.467 98.0201 180.142 96.7426 180.151 95.4456C180.144 94.1432 180.468 92.8605 181.092 91.7175C181.735 90.5392 182.613 89.5053 183.671 88.6795C184.822 87.7839 186.12 87.0932 187.506 86.6379C189.03 86.1242 190.63 85.8666 192.239 85.8755Z" fill="black"/>
        </svg>
      </header>
      {/* Content */}
      <div className='flex flex-col gap-8 sm:gap-0 md:flex-row justify-center items-center py-8 sm:py-60 md:py-28 px-4 sm:px-16 xl:px-48 mx-auto' style={{"backgroundImage":`url("./assets/bg-garden.png")`,"backgroundSize":"100% 100%","backgroundRepeat":"no-reapeat"}}>
        <div className='flex flex-col text-left flex-1 flex-grow h-full'>
          <h3 className='text-2xl mb-12 text-white font-bold'>STILL PAYING FOR DISPOSABLE PACKAGING?</h3>
          <h1 className='text-3xl sm:text-5xl space-y-12 text-white font-bold'>Cut Food Delivery Costs, Eliminate Packaging Costs By Up To 100%, and Slash Carbon Emissions by Up to 60%</h1>
          <h3 className='text-2xl my-12 text-white font-bold'>Sustainable Future, Happier Clients, Increased Profit.</h3>

          <button className="trial-btn px-8 py-4 mt-8">
            Try Us Free For 30 Days
          </button>
        </div>
        <div className='flex items-center justify-center flex-1 flex-grow' style={{"backgroundImage":`url("./assets/bg-tablet.png")`,"backgroundSize":"90% 90%","backgroundRepeat":"no-repeat","backgroundPosition":"center"}}>
          <img src="./assets/tablet-centric.png" alt="tablet" />
        </div>
      </div>
      {/* Services Table */}
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 py-8 sm:py-24 px-16 xl:px-48 text-left">
        <div className='flex gap-2 items-center pb-8'>
          <img src="./assets/icons/Group 189.png" alt="icon" />
          <p className='font-medium text-2xl'>30 Days 0% <br /> Commission</p>
        </div>
        <div className='flex gap-2 items-center pb-8'>
          <img src="./assets/icons/Group 178.png" alt="icon" />
          <p className='font-medium text-2xl'>Competitive <br /> Commission Per Order</p>
        </div>
        <div className='flex gap-2 items-center pb-8'>
          <img src="./assets/icons/Group 179.png" alt="icon" />
          <p className='font-medium text-2xl'>Free Exposure</p>
        </div>
        <div className='flex gap-2 items-center pb-8'>
          <img src="./assets/icons/Group 180.png" alt="icon" />
          <p className='font-medium text-2xl'>Free Reusable <br /> Packaging</p>
        </div>
        <div className='flex gap-2 items-center pb-8'>
          <img src="./assets/icons/Group 187.png" alt="icon" />
          <p className='font-medium text-2xl'>EcoCentric <br /> EcoBot</p>
        </div>
        <div className='flex gap-2 items-center pb-8'>
          <img src="./assets/icons/Group 186.png" alt="icon" />
          <p className='font-medium text-2xl'>Enhanced <br /> Reputation</p>
        </div>
        <div className='flex gap-2 items-center pb-8'>
          <img src="./assets/icons/Group 184.png" alt="icon" />
          <p className='font-medium text-2xl'>Eliminate <br /> Packaging Costs</p>
        </div>
        <div className='flex gap-2 items-center pb-8'>
          <img src="./assets/icons/Group 181.png" alt="icon" />
          <p className='font-medium text-2xl'>Reduce Carbon <br /> Emissions</p>
        </div>
        <div className='flex gap-2 items-center pb-8'>
          <img src="./assets/icons/Group 188.png" alt="icon" />
          <p className='font-medium text-2xl'>Sustainability <br /> Certification</p>
        </div>
        <div className='flex gap-2 items-center pb-8'>
          <img src="./assets/icons/Group 185.png" alt="icon" />
          <p className='font-medium text-2xl'>Insights for <br /> Success</p>
        </div>
        <div className='flex gap-2 items-center pb-8'>
          <img src="./assets/icons/Group 183.png" alt="icon" />
          <p className='font-medium text-2xl'>Competitive <br /> Analysis</p>
        </div>
        <div className='flex gap-2 items-center pb-8'>
          <img src="./assets/icons/Group 182.png" alt="icon" />
          <p className='font-medium text-2xl'>Carbon <br /> Calculator</p>
        </div>
      </div>
      {/* Brands Section */}
      <div class="grid gap-4 md:gap-16 md:grid-cols-4 py-8 px-16 xl:px-60 " style={{"background": "#E8F4FC"}}>
        <div className='h-16 md:h-36 bg-white'></div>
        <div className='h-16 md:h-36 bg-white'></div>
        <div className='h-16 md:h-36 bg-white'></div>
        <div className='h-16 md:h-36 bg-white'></div>
      </div>
      {/* Introduction */}
      <div style={{"backgroundImage":`url("./assets/filter-forest.png"),url("./assets/bg-forest.png")`,"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundPosition":"center"}}>
        {/* First Section */}
        <div className='flex flex-col items-center mx-auto justify-center gap-8 text-white max-w-xs sm:max-w-3xl py-8 md:py-44' >
          <h2 className='font-medium text-2xl sm:text-4xl' style={{"color":"#FDF7BF"}}>INTRODUCING...</h2>
          <h2 className='font-medium text-2xl sm:text-4xl uppercase'>The UAE's First</h2>
          <h1 className='font-medium text-2xl sm:text-4xl uppercase'>Sustainable Food Delivery App</h1>
          <p className='text-left leading-8 px-8 md:px-0'>
          Are high delivery costs and wasteful packaging bothering you? Looking for a quick way to reach customers who care about the environment? At Ecocentric, we help UAE restaurants turn their delivery into something that's good for the earth, easy on the budget, and appealing to customers. We've already shown many restaurants how to cut waste, remove packaging costs completely, and boost their earnings - all without a lot of fuss. We've made a big difference for others, and we're ready to do the same for you.
          </p>
          <button className="trial-btn px-8 py-4 mt-8">
            Try Us Free For 30 Days
          </button>
        </div>
        {/* Second Section */}
        <div className='flex flex-col md:flex-row items-center justify-center py-8 md:py-16 px-8 xl:px-60 bg-white bg-opacity-50'>
          <div className='flex-1'>
            <img src="./assets/centric-bag.png" alt="centric-bag" />
          </div>
          <div className='flex-1 text-left'>
            <h1 className='font-bold text-3xl sm:text-4xl mb-8'>WHY NOW ?</h1>
            <p className='font-medium text-2xl'>The UAE is taking a major stride towards a sustainable future with a sweeping ban on single-use plastic coming into effect in 2024. As a restaurant owner in Dubai, this impending regulation means embracing eco-friendly practices is no longer optional – it's a necessity. By partnering with our food delivery mobile app, you can stay ahead of the curve and position your restaurant as a sustainability champion.</p>
          </div>
        </div>
        {/* Third Section */}
        <div className='flex flex-col md:flex-row items-center justify-center px-8 xl:px-42 py-20'>
          <div className='flex-1'>
            <img src="./assets/tablet-stats.png" alt="centric-stats" />
          </div>
          <div className='flex-1 text-left text-white'>
            <h1 className='font-medium text-3xl sm:text-4xl mb-4 uppercase'>1 Out Of Every 5 People In The UAE </h1>
            <h1 className='font-medium text-2xl sm:text-3xl mb-20 uppercase'>Like To Buy From A Company If It's Eco-Friendly</h1>
            <p className='font-medium text-2xl leading-8'>Becoming a loved, eco-friendly restaurant in the UAE is easier than you'd think. Don't worry if you're unsure about how to start - we've figured it all out for you. Our straightforward plan can quickly transform your restaurant into a green haven. It's not just about being fast, though. By following our guidance, you'll achieve more than just reducing waste and cost. You'll also attract the 1 in 5 UAE customers who favor eco-friendly businesses, which is a win for the planet and your business</p>
            <button className="trial-btn px-8 py-4 mt-20">
              Try Us Free For 30 Days
            </button>
          </div>
        </div>
      </div>
      {/* Switch Section */}
      <div className='space-y-8 md:space-y-20 pt-12 md:pt-40' style={{"backgroundImage":`url("./assets/bg-trees.png")`,"backgroundSize":"100% 80%","backgroundRepeat":"no-repeat","backgroundPosition":"top"}} id='switch'>
        <div className="flex flex-col justify-center items-center">
          <h1 id='switch-text' className='font-bold text-2xl sm:text-4xl uppercase'>Make The Switch</h1>
          <img src="./assets/tablet-switch.png" alt="tablet" />
        </div>
        <div className='text-[#0D5954] flex flex-col justify-center items-center md:text-white md:pb-16'>
          <h1 className='font-medium text-2xl sm:text-3xl uppercase'>Revolutionary Food Delivery App</h1>
          <h1 className='font-medium text-2xl sm:text-4xl uppercase'>For Making Data-Driven Decisions</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center px-16 xl:px-60 mx-auto text-white'>
          <div className='card flex flex-col items-center pt-4 xl:pt-12 text-center space-y-1 sm:space-y-8 w-[80vw] md:w-[25vw] xl:w-[20vw]'>
            <img src="./assets/icons/Group 187.svg" alt="icon" className='w-[75px] h-[75px]'/>
            <h1 className='font-medium text-2xl sm:text-4xl'>EcoCentric <br /> EcoBot</h1>
            <p className='font-medium text-2xl leading-8'>
              Get detailed analysis of customer queries, concerns, and interests. You'll get insights about what customers hope for or fear, helping you tailor superior experiences!
            </p>
          </div>
          <div className='card2 flex flex-col items-center pt-4 xl:pt-12 text-center space-y-1 sm:space-y-8 w-[80vw] md:w-[25vw] xl:w-[20vw]'>
            <img src="./assets/icons/Group 185.svg" alt="icon" className='w-[75px] h-[75px]'/>
            <h1 className='font-medium text-2xl sm:text-4xl'>Insights for <br /> Success</h1>
            <p className='font-medium text-2xl leading-8'>
              Receive monthly reports on the top-ordered dishes across all restaurants serving the same cuisine as yours, aiding in the optimization of your menu based on customer preferences.
            </p>
          </div>
          <div className='card flex flex-col items-center pt-4 xl:pt-12 text-center space-y-1 sm:space-y-8 w-[80vw] md:w-[25vw] xl:w-[20vw]'>
            <img src="./assets/icons/Group 183.svg" alt="icon" className='w-[75px] h-[75px]'/>
            <h1 className='font-medium text-2xl sm:text-4xl'>Competitive <br /> Analysis</h1>
            <p className='font-medium text-2xl leading-8'>
              Our leaderboard compares your restaurant's performance with other competitors in the same cuisine, guiding you towards better decision-making.
            </p>
          </div>
          <div className='card2 flex flex-col items-center pt-4 xl:pt-12 text-center space-y-1 sm:space-y-8 w-[80vw] md:w-[25vw] xl:w-[20vw]'>
            <img src="./assets/icons/Group 182.svg" alt="icon" className='w-[75px] h-[75px]'/>
            <h1 className='font-medium text-2xl sm:text-4xl'>Carbon <br /> Calculator</h1>
            <p className='font-medium text-2xl leading-8'>
              Our tool displays your monthly carbon savings and lets you compare with competitors' performances on our leaderboard. Show customers your dedication to sustainability!
            </p>
          </div>
        </div>
        <div className='px-4 sm:px-0'>
            <button className="trial-btn2 px-8 py-4 mt-20">
              Try Us Free For 30 Days
            </button>
        </div>
        <div className='flex flex-col md:flex-row py-8 md:py-0 xl:py-24 justify-center items-center px-4 sm:px-16 xl:px-48 mx-auto' style={{"background": "#E8F4FC"}}>
          <div className='flex flex-col text-left flex-1 flex-grow h-full'>
            <h3 className='text-2xl mb-4 font-bold uppercase'>Slash Your Packaging Cost By Up To 100%</h3>
            <h1 className='text-3xl sm:text-4xl space-y-12 uppercase font-bold text-[#0D5954]'>Using Our FREE Packaging Solution</h1>
            <h3 className='text-2xl my-12 font-medium'>Lowering your packaging costs is a breeze with our solution. Too many restaurants spend more than necessary due to lack of better options. But we're here to change that with our FREE reusable, eco-friendly packaging. These aren't just any containers - they're BPA-free, odor-free, leak-proof, durable, and safe for both dishwashers and microwaves. Plus, they can withstand up to 1000 washes! By switching to our solution, you're not just saving money - you're also enhancing customer experience with high-quality, eco-conscious packaging.</h3>
          </div>
          <div className='flex items-center justify-center flex-1 flex-grow' style={{"backgroundImage":`url("./assets/bg-tablet2.png")`,"backgroundSize":"100% 100%","backgroundRepeat":"no-repeat","backgroundPosition":"center"}}>
            <img src="./assets/tablet-package.png" alt="tablet" />
          </div>
        </div>
      </div>
      {/* YEAR STATS */}
      <div className='flex flex-col items-center justify-center py-8 sm:py-28'>
        <h1 className='font-bold text-3xl mb-2'>Every year, Together,</h1>
        <h1 className='text-[#0D5954] font-bold text-4xl'>We Can Eliminate</h1>
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-12'>
          <div className='card3 flex-1 flex-grow text-center py-4 md:py-0'>
            <h1 className='text-[#0D5954] font-bold text-5xl'>2.0M</h1>
            <p className='font-medium text-2xl'>Single-use containers</p>
          </div>
          <div className='card3 flex-1 flex-grow text-center py-4 md:py-0'>
            <h1 className='font-bold text-5xl'>555</h1>
            <p className='font-medium text-2xl'>Ton of CO2</p>
          </div>
          <div className='card3 flex-1 flex-grow text-center py-4 md:py-0'>
            <h1 className='font-bold text-5xl'>7%</h1>
            <p className='font-medium text-2xl'>Gallons of water exerted due to composting</p>
          </div>
          <div className='card3 flex-1 flex-grow text-center py-4 md:py-0'>
            <h1 className='font-bold text-5xl'>95K</h1>
            <p className='font-medium text-2xl'>Tons of green house gases
            </p>
          </div>
        </div>
        <div className='px-4 sm:px-0'>
          <button className="trial-btn3 px-8 py-4 mt-20">
            Try Us Free For 30 Days
          </button>
        </div>
      </div>
      {/* STEPS */}
      <div className='flex flex-col items-center justify-center py-28' style={{"backgroundImage":`url("./assets/filter-city.png"),url("./assets/bg-city.png")`,"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundPosition":"center"}}>
        <div className='text-white mb-28'>
          <h1 className='font-bold text-3xl mb-2'>6 Simple Steps To Join</h1>
          <h1 className='font-bold text-4xl'>EcoCentric</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 text-center sm:text-left text-white sm:text-black'>
          <div className='sm:max-w-7xl step' style={{"backgroundImage":`url("./assets/bg-step.png")`,"backgroundSize":"100% 100%","backgroundRepeat":"no-repeat"}}>
            <div className='flex flex-col md:flex-row items-center px-8 sm:px-28 md:px-52 py-8 gap-4'>
              <img src="./assets/icons/Group 204.svg" alt="icon" />
              <div>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <p className='text-2xl font-medium'>
                  Begin your journey with us by completing a simple online form. Don't worry, it won't take more than a few minutes!
                </p>
              </div>
            </div>
          </div>
          <div className='max-w-7xl step' style={{"backgroundImage":`url("./assets/bg-step.png")`,"backgroundSize":"100% 100%","backgroundRepeat":"no-repeat"}}>
            <div className='flex flex-col md:flex-row items-center px-8 sm:px-28 md:px-52 py-8 gap-4'>
              <img src="./assets/icons/Group 205.svg" alt="icon" />
              <div>
                <h1 className='text-3xl font-bold'>Get Approval</h1>
                <p className='text-2xl font-medium'>
                After you've signed up, pick a convenient date and time for us to contact you. No more uncertain waiting - we value your time as much as you do!
                </p>
              </div>
            </div>
          </div>
          <div className='max-w-7xl step' style={{"backgroundImage":`url("./assets/bg-step.png")`,"backgroundSize":"100% 100%","backgroundRepeat":"no-repeat"}}>
            <div className='flex flex-col md:flex-row items-center px-8 sm:px-28 md:px-52 py-8 gap-4'>
              <img src="./assets/icons/Group 206.svg" alt="icon" />
              <div>
                <h1 className='text-3xl font-bold'>Free Menu Upload</h1>
                <p className='text-2xl font-medium'>
                Once you're on board, we'll help you upload your menu - absolutely free of charge! No hidden fees or technical headaches.
                </p>
              </div>
            </div>
          </div>
          <div className='max-w-7xl step' style={{"backgroundImage":`url("./assets/bg-step.png")`,"backgroundSize":"100% 100%","backgroundRepeat":"no-repeat"}}>
            <div className='flex flex-col md:flex-row items-center px-8 sm:px-28 md:px-52 py-8 gap-8'>
              <img src="./assets/icons/Group 207.svg" className='ml-6 ' alt="icon" />
              <div>
                <h1 className='text-3xl font-bold'>Staff Training</h1>
                <p className='text-2xl font-medium'>
                Worried about your team adapting to the new system? We'll provide comprehensive training to ensure a smooth transition.
                </p>
              </div>
            </div>
          </div>
          <div className='max-w-7xl step' style={{"backgroundImage":`url("./assets/bg-step.png")`,"backgroundSize":"100% 100%","backgroundRepeat":"no-repeat"}}>
            <div className='flex flex-col md:flex-row items-center px-8 sm:px-28 md:px-52 py-8 gap-4'>
              <img src="./assets/icons/Group 208.svg" alt="icon" />
              <div>
                <h1 className='text-3xl font-bold'>Container Inventory</h1>
                <p className='text-2xl font-medium'>
                ou'll be equipped with our top-notch, eco-friendly containers. These BPA-free, odor-free, leak-proof, durable, dishwasher-safe, and microwave-safe containers are designed to impress!
                </p>
              </div>
            </div>
          </div>
          <div className='max-w-7xl step' style={{"backgroundImage":`url("./assets/bg-step.png")`,"backgroundSize":"100% 100%","backgroundRepeat":"no-repeat"}}>
            <div className='flex flex-col md:flex-row items-center px-8 sm:px-28 md:px-52 py-8 gap-4'>
              <img src="./assets/icons/Group 209.svg" className='mr-4 ml-4' alt="icon" />
              <div>
                <h1 className='text-3xl font-bold'>Profit and Save The Planet</h1>
                <p className='text-2xl font-medium'>
                The final step? Watch your profits grow as your carbon footprint shrinks. Every delivery brings a better bottom line and a healthier planet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='px-4 sm:px-0'>
          <button className="trial-btn4 px-8 py-4 mt-20">
            Try Us Free For 30 Days
          </button>
        </div>
      </div>
      {/* TABLE */}
      <div className='py-16 sm:py-28 md:py-40' style={{"backgroundImage":`url("./assets/bg-mountain.png")`,"backgroundSize":"100% 100%","backgroundRepeat":"no-repeat"}}>
        <div>
          <h1 className='font-bold text-3xl mb-2'>Why EcoCentric Is</h1>
          <h1 className='font-bold text-[#0D5954] text-4xl'>The Best Solution?</h1>
        </div>
        {/* <div className="flex justify-center items-start py-24 px-4 md:px-16 xl:px-60 text-left overflow-auto">
          <div className='text-[#0D5954] bg-[#E8F4FC] grid grid-cols-1  border border-[#0D5954] text-left' id='features-table'>
            <h1 className='font-medium text-3xl md:text-4xl flex flex-col justify-center w-full h-full  border border-[#0D5954] py-8 px-12 uppercase'>Features</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border border-[#0D5954] py-8 px-12'>Free Reusable Packaging</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border border-[#0D5954] py-8 px-12'>Impact-Driven Business</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border border-[#0D5954] py-8 px-12'>Carbon Calculator</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border border-[#0D5954] py-8 px-12'>Social & Environmental <br /> Certifications</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border border-[#0D5954] py-8 px-12'>Emission-Free Delivery</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border border-[#0D5954] py-8 px-12'>Delivery Sharing Feature</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border border-[#0D5954] py-8 px-12'>Comprehensive Data-<br />Driven Decisions	</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border border-[#0D5954] py-8 px-12'>Detailed Customer Analysis</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border border-[#0D5954] py-8 px-12'>Competitive Analysis</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border border-[#0D5954] py-8 px-12'>Top-Ordered Dishes Insights</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border border-[#0D5954] py-8 px-12'>Customers Pay for <br /> Taste, Not Waste	</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border border-[#0D5954] py-8 px-12'>Free Trial</h1>
          </div>
          <div className='text-[#0D5954] bg-[#E8F4FC] grid grid-cols-1  border border-[#0D5954] text-center' id='services-table'>
            <h1 className='font-medium text-2xl md:text-4xl flex flex-col justify-center w-full h-full border-y-2 border-[#0D5954] py-[28px] px-12 uppercase'>Other Food <br /> Delivery Services</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-y-2 border-[#0D5954] py-8 px-12'>None</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-y-2 border-[#0D5954] py-8 px-12'>None</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-y-2 border-[#0D5954] py-8 px-12'>None</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-y-2 border-[#0D5954] py-8 px-12'>None</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-y-2 border-[#0D5954] py-8 px-12'>None</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-y-2 border-[#0D5954] py-8 px-12'>None</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-y-2 border-[#0D5954] py-8 px-12'>Varies</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-y-2 border-[#0D5954] py-8 px-12'>Varies</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-y-2 border-[#0D5954] py-8 px-12'>Varies</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-y-2 border-[#0D5954] py-8 px-12'>None</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-y-2 border-[#0D5954] py-8 px-12'>None</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-y-2 border-[#0D5954] py-8 px-12'>None</h1>
          </div>
          <div className='text-white bg-[#0D5954] grid grid-cols-1 text-center relative bottom-[35.5px] right-[10px]' id='centric-table'>
            <h1 className='font-medium text-3xl md:text-4xl flex flex-col justify-center w-full h-[200px] py-[29.1px] px-12 uppercase'><img src="./assets/logo.png" alt="logo" /></h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-t-2 border-white py-[50.55px] px-12'>Yes</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-t-2 border-white py-8 px-12'>Yes</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-t-2 border-white py-8 px-12'>Yes</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-t-2 border-white py-8 px-12'>Yes</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-t-2 border-white py-8 px-12'>Yes</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-t-2 border-white py-8 px-12'>Yes</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-t-2 border-white py-8 px-12'>Yes</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-t-2 border-white py-8 px-12'>Yes</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-t-2 border-white py-8 px-12'>Yes</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-t-2 border-white py-8 px-12'>Yes</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-full border-t-2 border-white py-8 px-12'>Yes</h1>
            <h1 className='font-medium text-2xl md:text-3xl flex flex-col justify-center w-full h-[200px] border-t-2 border-white py-16 px-12'>Yes</h1>
          </div>
        </div> */}
        <img src="./assets/Group 210.png" className='mx-auto py-24 w-4/5 2xl:w-auto' alt="table" />
        <div className='px-4 sm:px-0'>
          <button className="trial-btn3 px-8 py-4 mt-20">
            Try Us Free For 30 Days
          </button>
        </div>
      </div>
      {/* Guarantee */}
      <div className='flex flex-col items-center justify-center space-y-3 sm:space-y-16 md:space-y-28 pt-16 md:pt-56' style={{"backgroundImage":`url("./assets/bg-mountains.png")`,"backgroundSize":"100% 50%","backgroundRepeat":"no-repeat","backgroundPosition":"top"}}>
        <img src="./assets/icons/guarentee.svg" alt="guarentee.svg" />
        <div className='text-white'>
          <h1 className='font-bold text-2xl sm:text-3xl mb-2'>The 'EcoCentric 30-Day </h1>
          <h1 className='font-bold text-2xl sm:text-4xl'>Green Guarantee'</h1>
        </div>
        <p className='font-medium text-2xl text-left max-w-4xl mx-auto text-white px-8 md:px-0'>
          Try our full suite of services - eco-friendly packaging, carbon calculator, insights, emission-free delivery, and more - for an entire month, absolutely free. Experience the EcoCentric difference with zero risk. If we're not your perfect fit, simply walk away. No hidden fees, no strings attached. Make the leap to a greener, more profitable future today, and see the difference for yourself!
        </p>
        <div className='px-4 sm:px-0'>
          <button className="trial-btn3 px-8 py-4">
            Try Us Free For 30 Days
          </button>
        </div>
        <div className='py-16 sm:pt-40'>
          <h1 className='font-bold text-2xl sm:text-3xl mb-2'>Frequently Asked</h1>
          <h1 className='text-[#0D5954] font-bold text-2xl sm:text-4xl'>Questions</h1>
        </div>
        <div className='flex flex-col items-center justify-center space-y-6 sm:space-y-12'>
          <div className='flex flex-col items-center px-2 sm:px-8 md:px-0 w-full'>
            <div className='bg-[#E8F4FC] flex items-center justify-between py-8 px-2 sm:px-8 w-full md:w-2/3 rounded-tr-xl rounded-tl-xl'>
              <h1 className='text-2xl sm:text-4xl font-medium'>1. How does EcoCentric help restaurants grow?</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className={isActive1 ? "overflow-visible cursor-pointer" : "cursor-pointer overflow-visible rot"}  onClick={(e)=>handleClick1(e)} width="22" height="15" viewBox="0 0 22 15" fill="none">
                <path d="M1.10066 15L20.9012 15C21.1017 14.9994 21.2982 14.9491 21.4696 14.8544C21.641 14.7596 21.7807 14.6242 21.8739 14.4625C21.967 14.3008 22.0099 14.1191 21.9981 13.9368C21.9862 13.7546 21.92 13.5787 21.8066 13.4282L11.9063 0.404972C11.496 -0.134991 10.5081 -0.134991 10.0967 0.404972L0.196437 13.4282C0.0818408 13.5784 0.0146391 13.7543 0.00213288 13.9369C-0.0103733 14.1194 0.0322943 14.3016 0.1255 14.4636C0.218706 14.6257 0.358885 14.7613 0.530807 14.8559C0.702729 14.9504 0.899819 15.0003 1.10066 15Z" fill="black"/>
              </svg>
            </div>
            { isActive1 &&
              <div className='bg-[#E8F4FC] bg-opacity-30 flex items-center justify-between py-8 px-2 sm:px-8 w-full md:w-2/3 rounded-br-xl rounded-bl-xl'>
                <p className='text-2xl font-medium text-left'>
                EcoCentric helps restaurants increase sales, reach eco-conscious customers, and enhance brand reputation through our sustainable delivery model. By joining us, you tap into a network of customers who prefer to order from environmentally friendly businesses like yours.
                </p>
              </div>
            }
          </div>
          <div className='flex flex-col items-center px-2 sm:px-8 md:px-0 w-full'>
            <div className='bg-[#E8F4FC] flex items-center justify-between py-8 px-2 sm:px-8 w-full md:w-2/3 rounded-tr-xl rounded-tl-xl'>
              <h1 className='text-2xl sm:text-4xl font-medium'>2. How can I become an EcoCentric partner?</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className={isActive2 ? "overflow-visible cursor-pointer" : "cursor-pointer overflow-visible rot"}  onClick={(e)=>handleClick2(e)} width="22" height="15" viewBox="0 0 22 15" fill="none">
                <path d="M1.10066 15L20.9012 15C21.1017 14.9994 21.2982 14.9491 21.4696 14.8544C21.641 14.7596 21.7807 14.6242 21.8739 14.4625C21.967 14.3008 22.0099 14.1191 21.9981 13.9368C21.9862 13.7546 21.92 13.5787 21.8066 13.4282L11.9063 0.404972C11.496 -0.134991 10.5081 -0.134991 10.0967 0.404972L0.196437 13.4282C0.0818408 13.5784 0.0146391 13.7543 0.00213288 13.9369C-0.0103733 14.1194 0.0322943 14.3016 0.1255 14.4636C0.218706 14.6257 0.358885 14.7613 0.530807 14.8559C0.702729 14.9504 0.899819 15.0003 1.10066 15Z" fill="black"/>
              </svg>
            </div>
            { isActive2 &&
              <div className='bg-[#E8F4FC] bg-opacity-30 flex items-center justify-between py-8 px-2 sm:px-8 w-full md:w-2/3 rounded-br-xl rounded-bl-xl'>
                <p className='text-2xl font-medium text-left'>
                To become an EcoCentric partner, fill out our simple sign-up form. Ensure to provide a valid phone number and email address. We'll then schedule a convenient date and time to contact you for further approval processes.
                </p>
              </div>
            }
          </div>
          <div className='flex flex-col items-center px-2 sm:px-8 md:px-0 w-full'>
            <div className='bg-[#E8F4FC] flex items-center justify-between py-8 px-2 sm:px-8 w-full md:w-2/3 rounded-tr-xl rounded-tl-xl'>
              <h1 className='text-2xl sm:text-4xl font-medium'>3. Is EcoCentric available in my area?</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className={isActive3 ? "overflow-visible cursor-pointer" : "cursor-pointer overflow-visible rot"}  onClick={(e)=>handleClick3(e)} width="22" height="15" viewBox="0 0 22 15" fill="none">
                <path d="M1.10066 15L20.9012 15C21.1017 14.9994 21.2982 14.9491 21.4696 14.8544C21.641 14.7596 21.7807 14.6242 21.8739 14.4625C21.967 14.3008 22.0099 14.1191 21.9981 13.9368C21.9862 13.7546 21.92 13.5787 21.8066 13.4282L11.9063 0.404972C11.496 -0.134991 10.5081 -0.134991 10.0967 0.404972L0.196437 13.4282C0.0818408 13.5784 0.0146391 13.7543 0.00213288 13.9369C-0.0103733 14.1194 0.0322943 14.3016 0.1255 14.4636C0.218706 14.6257 0.358885 14.7613 0.530807 14.8559C0.702729 14.9504 0.899819 15.0003 1.10066 15Z" fill="black"/>
              </svg>
            </div>
            { isActive3 &&
              <div className='bg-[#E8F4FC] bg-opacity-30 flex items-center justify-between py-8 px-2 sm:px-8 w-full md:w-2/3 rounded-br-xl rounded-bl-xl'>
                <p className='text-2xl font-medium text-left'>
                To check if EcoCentric operates in your area, start the sign-up process. If we're currently not present in your area, we'll keep your details and reach out when we expand our operations.
                </p>
              </div>
            }
          </div>
          <div className='flex flex-col items-center px-2 sm:px-8 md:px-0 w-full'>
            <div className='bg-[#E8F4FC] flex items-center justify-between py-8 px-2 sm:px-8 w-full md:w-2/3 rounded-tr-xl rounded-tl-xl'>
              <h1 className='text-2xl sm:text-4xl font-medium'>4. What's EcoCentric's delivery radius?</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className={isActive4 ? "overflow-visible cursor-pointer" : "cursor-pointer overflow-visible rot"}  onClick={(e)=>handleClick4(e)} width="22" height="15" viewBox="0 0 22 15" fill="none">
                <path d="M1.10066 15L20.9012 15C21.1017 14.9994 21.2982 14.9491 21.4696 14.8544C21.641 14.7596 21.7807 14.6242 21.8739 14.4625C21.967 14.3008 22.0099 14.1191 21.9981 13.9368C21.9862 13.7546 21.92 13.5787 21.8066 13.4282L11.9063 0.404972C11.496 -0.134991 10.5081 -0.134991 10.0967 0.404972L0.196437 13.4282C0.0818408 13.5784 0.0146391 13.7543 0.00213288 13.9369C-0.0103733 14.1194 0.0322943 14.3016 0.1255 14.4636C0.218706 14.6257 0.358885 14.7613 0.530807 14.8559C0.702729 14.9504 0.899819 15.0003 1.10066 15Z" fill="black"/>
              </svg>
            </div>
            { isActive4 &&
              <div className='bg-[#E8F4FC] bg-opacity-30 flex items-center justify-between py-8 px-2 sm:px-8 w-full md:w-2/3 rounded-br-xl rounded-bl-xl'>
                <p className='text-2xl font-medium text-left'>
                We set our delivery radius within a 15-minute drive time from the location of the restaurant to ensure prompt deliveries while maintaining the quality and freshness of orders.
                </p>
              </div>
            }
          </div>
          <div className='flex flex-col items-center px-2 sm:px-8 md:px-0 w-full'>
            <div className='bg-[#E8F4FC] flex items-center justify-between py-8 px-2 sm:px-8 w-full md:w-2/3 rounded-tr-xl rounded-tl-xl'>
              <h1 className='text-2xl sm:text-4xl font-medium'>5. What equipment will I need?</h1>
              <svg xmlns="http://www.w3.org/2000/svg" className={isActive5 ? "overflow-visible cursor-pointer" : "cursor-pointer overflow-visible rot"}  onClick={(e)=>handleClick5(e)} width="22" height="15" viewBox="0 0 22 15" fill="none">
                <path d="M1.10066 15L20.9012 15C21.1017 14.9994 21.2982 14.9491 21.4696 14.8544C21.641 14.7596 21.7807 14.6242 21.8739 14.4625C21.967 14.3008 22.0099 14.1191 21.9981 13.9368C21.9862 13.7546 21.92 13.5787 21.8066 13.4282L11.9063 0.404972C11.496 -0.134991 10.5081 -0.134991 10.0967 0.404972L0.196437 13.4282C0.0818408 13.5784 0.0146391 13.7543 0.00213288 13.9369C-0.0103733 14.1194 0.0322943 14.3016 0.1255 14.4636C0.218706 14.6257 0.358885 14.7613 0.530807 14.8559C0.702729 14.9504 0.899819 15.0003 1.10066 15Z" fill="black"/>
              </svg>
            </div>
            { isActive5 &&
              <div className='bg-[#E8F4FC] bg-opacity-30 flex items-center justify-between py-8 px-2 sm:px-8 w-full md:w-2/3 rounded-br-xl rounded-bl-xl'>
                <p className='text-2xl font-medium text-left'>
                To manage and receive orders from EcoCentric, you'll simply need a device (tablet or desktop) to sign in to our platform. As per municipality requirements, vendors are responsible for the hygiene of the containers, similar to dine-in plates, glasses, or cooking utensils. Therefore, a dishwasher or commercial washer is necessary to maintain container cleanliness.
                </p>
              </div>
            }
          </div>
        </div>
      </div>
      <footer className='flex flex-col items-center justify-center space-y-4 px-4 sm:px-0 sm:space-y-8 pt-8 sm:pt-24 pb-8'>
        <div>
          <h1 className='text-2xl sm:text-3xl font-bold uppercase mb-4'>What Are You Waiting For?</h1>
          <h1 className='text-2xl sm:text-4xl font-bold uppercase text-[#0D5954]'>Make The Switch</h1>
        </div>
        <div className='px-4 sm:px-0'>
          <button className="trial-btn3 px-8 py-4">
            Try Us Free For 30 Days
          </button>
        </div>
        <img src="./assets/closure.png" alt="flowers" />
        <h1 className='text-2xl sm:text-3xl font-bold'>All rights Reserved 2023. You don't want to copy our content. Trust us.</h1>
      </footer>
    </div>
  );
}

export default App;
