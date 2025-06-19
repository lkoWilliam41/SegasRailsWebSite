let headerComponent = `
        <header class="site-header header-style-2 mobile-sider-drawer-menu">
      
            <div class="top-bar site-bg-secondry">
                <div class="container">

                        <div class="d-flex justify-content-between">
                            <div class="wt-topbar-left d-flex flex-wrap align-content-start">
                                <ul class="wt-topbar-info e-p-bx text-white">
                                    <li><span> Lundi - Vendredi</span><span>07:30 -15:30</span></li>
                                </ul>
                            </div>
                            
                            <div class="wt-topbar-right d-flex flex-wrap align-content-center">
                                <ul class="wt-topbar-info-2 e-p-bx text-white">
                                    <li><i class="fa fa-phone"></i>+(241) 663 362 00</li>
                                    <li><i class="fa fa-envelope"></i>contact@SegasRail.com</li>
                                </ul> 
                
                                <ul class="social-icons">
                                    <li><a href="javascript:void(0);" class="fa fa-google"></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-rss"></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-facebook"></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-twitter"></a></li>
                                    <li><a href="javascript:void(0);" class="fa fa-linkedin"></a></li>
                                </ul> 
                                                                          
                            </div>
                        </div>

                </div>
            </div>  
                       
           <div class="sticky-header main-bar-wraper  navbar-expand-lg">
                <div class="main-bar">                       
                       <div class="container clearfix"> 
                       
                            <div class="logo-header">
                                <div class="logo-header-inner logo-header-one">
                                    <a href="index.html">
                                    <img src="images/segaslogo.jpg" alt="" />
                                    </a>
                                </div>
                            </div>  
                            
                            <!-- NAV Toggle Button -->
                            <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" class="navbar-toggler collapsed">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar icon-bar-first"></span>
                                <span class="icon-bar icon-bar-two"></span>
                                <span class="icon-bar icon-bar-three"></span>
                            </button> 
                                                       
                            <div class="">
                                <div class="extra-cell">
                                    <div class="">
                                        
                                    </div>                                
                                    <div class="">
                                        
                                    </div>
                                
                                </div>
                                 
                             </div>                                                                       

                             
                            <!-- MAIN Vav -->
                            <div class="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
                        
                                <ul class=" nav navbar-nav">
                                    <li><a href="index.html">Accueil</a>
                                    </li>

                                    <li><a href="metiers-2.html">metiers</a>
                                    </li>

                                    <li><a href="owendo.html">Sites</a>
                                        <ul class="sub-menu menu-site">                                     
                                            <li><a href="owendo.html">Gare d'Owendo</a></li>
                                            <li><a href="owendo.html">Gare de Ntoum</a></li>
                                            <li><a href="owendo.html">Gare d'Andem</a></li>
                                            <li><a href="owendo.html">Gare de Mbel</a></li>
                                            <li><a href="owendo.html">Gare d'Oyan</a></li>
                                            <li><a href="ndjole.html">Gare de Ndolé</a></li>
                                            <li><a href="ndjole.html">Gare d'Otoumbi</a></li>
                                            <li><a href="ndjole.html">Gare de la Lopé</a></li>
                                            <li><a href="booue.html">Gare de Booué</a></li>
                                            <li><a href="booue.html">Gare de Mouyabi</a></li>
                                            <li><a href="booue.html">Gare de Lastourville</a></li>
                                            <li><a href="booue.html">Gare de Lifouta</a></li>
                                            <li><a href="moanda.html">Gare de Moanda</a></li>
                                            <li><a href="franceville.html">Gare de Franceville</a></li>
                                        </ul>                                
                                   </li>
                                    
                                    <li><a href="about-1.html">A propos</a>                              
                                    </li>                                    
                                    
                                    <li><a href="charte-ChefdEquipe.html">Chartes & Politiques</a>
                                        <ul class="sub-menu menu-charte">                                     
                                            <li><a href="charte-ChefdEquipe.html">Charte du Chef d'équipe</a></li>
                                            <li><a href="charte-Referent.html">Charte du Référent</a></li>
                                            <li><a href="charte-AEV.html">Charte de l'AEV</a>
                                            <li><a href="charte-environnementale.html">Charte Environnementale</a>
                                            <li><a href="politique-antidrogue.html">Politique Antidrogue</a>
                                            <li><a href="politique-sst.html">Politique SST</a>
                                        </ul>                                
                                   </li>
                                    <li>
                                        <a href="contact-1.html">Contact</a>
                                    </li>
                                    <li><a href="">Blog</a>
                                    </li>                                                                

                               
                                </ul>
    
                            </div>
                        
                            <!-- SITE Search -->
                            <div id="search-toggle-block">
                                <div id="search"> 
                                    <form role="search" id="searchform" action="https://thewebmax.org/search" method="get" class="radius-xl">
                                        <div class="input-group">
                                            <input class="form-control" value="" name="q" type="search" placeholder="Type to search"/>
                                            <span class="input-group-append"><button type="button" class="search-btn"><i class="fa fa-search"></i></button></span>
                                        </div>   
                                    </form>
                                </div>
                            </div>                                
                            
                        </div>    
                    </div>
                    
            </div>
            
        </header>
`

let header = document.getElementById('header')
header.innerHTML = headerComponent



footerComponent = `
    <footer class="site-footer footer-large footer-dark text-white footer-style2" >

        
            <!-- FOOTER BLOCKES START -->  
            <div class="footer-top bg-no-repeat bg-bottom-right" style="background-image:url(images/background/footer-bg.png)">
                <div class="container">
                    <div class="row">
                    
                        <div class="col-lg-5 col-md-12 col-sm-12"> 
                        	<div class="footer-h-left"> 
                                <div class="widget widget_about">
                                    <div class="logo-footer clearfix">
                                        <a href="index.html"><img src="images/segaslogofooter.jpg" alt="" ></a>
                                    </div>
                                    <p>
                                    Fondée en 2016, SEGAS RAIL est un GIE structuré autour de cinq entreprises spécialisées dans le BTP. 
                                    L’entreprise intervient dans la pose et la dépose des rails, le remplacement des traverses et la 
                                    maintenance des infrastructures ferroviaires, garantissant des interventions alliant innovation, 
                                    sécurité et qualité.                                    
                                    </p>
                                 </div>
                                <div class="widget recent-posts-entry">
                                   <ul class="widget_address"> 
                                        <li><i class="fa fa-map-marker"></i>Libreville, Owendo, Gabon</li>
                                        <li><i class="fa fa-envelope"></i>contact@SegasRail.com</li>
                                        <li> <i class="fa fa-phone"></i>+(241) 663 362 00 </li>
                                    </ul>  
                                </div>
                               
                            </div>                              
                            
                        </div> 

						<div class="col-lg-7 col-md-12 col-sm-12">
                        	<div class="row footer-h-right">
                            	<div class="col-lg-5 col-md-4">
                                    <div class="widget widget_metiers">
                                        <h3 class="widget-title">Nos metiers</h3>
                                        <ul>
                                            <li>Chef d'équipe</li>
                                            <li>Référent HEC</li>
                                            <li>Soudeur</li>
                                            <li>Cantonnier</li>
                                            <li>AEV</li>
                                           
                                        </ul>
                                    </div>
                            	</div>

                            	<div class="col-lg-7 col-md-8">
                                    <div class="widget widget_metiers">
                                        <h3 class="widget-title">Liens Utilies</h3>
                                        <ul>
                                            <li><a href="index.html">Acceuil</a><a href="metiers-2.html">metiers</a></li>
                                            <li><a href="about-1.html">A propos</a><a href="charte-ChefdEquipe.html">Charte du chef d'équipe</a></li>
                                            <li><a href="charte-Referent.html">Charte du Réferent</a><a href="charte-AEV.html">Charte de l'AEV</a></li>
                                            <li><a href="metiers-2.html">metiers </a><a href="contact-1.html">Contact </a></li>
                                            <li><a href="">Blog </a></li>
                                            
                                        </ul>
                                    </div>
                                   <div  class="col-lg-5 col-md-12 col-sm-12">
                                        <ul class="social-icons  wt-social-links footer-social-icon">
                                            <li><a href="javascript:void(0);" class="fa fa-facebook"></a></li>
                                            <li><a href="javascript:void(0);" class="fa fa-twitter"></a></li>
                                            <li><a href="javascript:void(0);" class="fa fa-linkedin"></a></li>
                                        </ul> 
                                   </div> 
                            	</div>                                
                            
                            </div>
                            
                        </div> 

                    </div>
                </div>
            </div>
            <!-- FOOTER COPYRIGHT -->
            
            <div class="footer-bottom">
              <div class="container">
                <div class="wt-footer-bot-left d-flex justify-content-between">
                    <span class="copyrights-text">Copyright © 2025 <span class="site-text-primary"> par ELOKOSAMA</span></span>
                    <ul class="copyrights-nav"> 
                        <li><a href="#">Terms  &amp; Condition</a></li>
                        <li><a href="#">Politique de Confidentialité</a></li>
                        <li><a href="contact-1.html">Contact</a></li>
                    </ul>     
                </div>
              </div>   
            </div>   


        </footer>

`

  document.addEventListener("DOMContentLoaded", function () {
      let yearSpan = document.querySelector(".copyrights-text"); 
      let currentYear = new Date().getFullYear(); 
      yearSpan.innerHTML = `Copyright © ${currentYear} <span class="site-text-primary">par ELOKOSAMA</span>`;
  });


let Footer = document.getElementById('footer')
Footer.innerHTML = footerComponent

//  SCRIPT POUR FAIRE DEFILER LES PARTENAIRES A L INIFINI
  document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.getElementById("sliderWrapper");
    const items = Array.from(sliderWrapper.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      sliderWrapper.appendChild(clone);
    });
  });
//  SCRIPT POUR FAIRE DEFILER LES PARTENAIRES A L INIFINI END