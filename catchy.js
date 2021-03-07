(function() {
  const searchURLREGex = /facebook\.com|youtube\.com\/?(?!.*watch)|vk\.com|test-catchy-delay\.html/gi;
  if (searchURLREGex.test(window.location.href)) {
    const catchy_delay_div = document.createElement("div");
    catchy_delay_div.id = 'catchy_delay_div';
    catchy_delay_div.style='position:fixed;top:0px;left:0;width:100vw;height:100vw;z-index:999999999;padding:20px;font-family:monospace;font-size:24px;color:#AAAAAA;background-color:#000000;text-align:center;';
    catchy_delay_div.innerHTML = 'The page is being delayed for 15 seconds';
    document.documentElement.appendChild(catchy_delay_div);
    setTimeout(function() {
      document.getElementById('catchy_delay_div').remove();
    }, 15000)
  }
}
) ();
