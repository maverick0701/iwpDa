var anch=document.querySelectorAll('#header-header li a');
for(var i=0;i<anch.length;i++)
  {
    anch[i].addEventListener('click',function(event)
    {
        event.preventDefault();
        var secid=this.getAttribute('data-value');
        var sectag=document.getElementById(secid);
        if(secid=="contact")
        {
            var stop=setInterval(function()
            {
                var tar=sectag.getBoundingClientRect();
                if(tar.top<=250)
                {
                    clearInterval(stop);
                    return;
                }
                window.scrollBy(0,50);
                
            },20);

        }
        else
        {
            var stop=setInterval(function()
            {
                var tar=sectag.getBoundingClientRect();
                if(tar.top<=0)
                {
                    clearInterval(stop);
                    return;
                }
                window.scrollBy(0,50);
                
            },20);
        }

    });
  }
// var smain=document.getElementById('skill-main');
// var pbar=document.getElementsByClassName('skill-holder');
// var pbarholder=document.getElementsByClassName('skill-name');
//  window.addEventListener('scroll',scrollDown);
//  var animationDone=false;
//  function initialize()
//  {
    
//     for(let i=0;i<pbarholder.length;i++)
//     {
//         pbarholder[i].style.width=0+'%';
//         pbarholder[i].style.overflow='hidden';
        
//     }
// }
// initialize();
// function fillBars()
// {
//     for(let i=0;i<pbarholder.length;i++)
//     {
//         let width=0;
//         let anima=setInterval(function(){
//             if(width>80)
//             {
//                 clearInterval(anima);
//                 return;
//             }
//             width++;
//             pbarholder[i].style.width=width+'%';
//         },20);
        
//     }
// }
// function scrollDown()
// {
//     var stop1=smain.getBoundingClientRect();
//     if(stop1.top<window.innerHeight && animationDone==false)
//     {
//         fillBars();
//         animationDone=true;
//     }
//     else if(stop1.top>window.innerHeight)
//     {
//         animationDone=false;
//     }
// }
var smain=document.getElementById('skill-main');
var sholder=document.getElementsByClassName('skill-holder');
var sbar=document.getElementsByClassName('skill-name');
window.addEventListener('scroll',scrollDown);
function intitialize()
{
    for(let i=0;i<sbar.length;i++)
    {
        sbar[i].style.width=0+'%';
        sbar[i].style.overflow='hidden';
        
    }
}
intitialize();
function fillBar(bar)
{
   
        let width=0;
        let anima=setInterval(function(){
            if(width>80)
            {
                clearInterval(anima);
                
                return;
            }
            width++;
          bar.style.width=width+'%';
        },20);
}
var animationDone=[false,false,false,false,false,false];


function scrollDown()
{
    
    let k=0;
    for(let i=0;i<sbar.length;i++)
    {
       let bar=sbar[i];
        var barTop=sbar[i].getBoundingClientRect();
        if(barTop.top<window.innerHeight && animationDone[i]==false)
        {
           
             animationDone[i]=true;
            fillBar(bar);
            console.log(i);
            
        }
    }
    var top1=smain.getBoundingClientRect();

    if(top1.top>window.innerHeight)
    {
        animationDone=[false,false,false,false,false,false];
    }
}
