


let Onlineservice = alert ("Phone USSD Services");

let x = prompt ("1. Data Plan \n2. Social Bundles \n3. Balance Check \n4. Roaming/Int`l \n5. Borrow credit/Recharge \n6. Gift data \n7. Video Pack \n8. Hot deals");
 
if (x==1) {
    let xa = prompt ("1. Daily \n2.Weekly  \n3.Monthly \n4.2-3 Month \n5.Always on Plan \n6.Broadband Plan \n7.Family Pack \n8.Hot Deals \n9.Free YouTube \n10.Manage Data \n0.Back");

   if (xa==1) {
    let xai = prompt ("1. #50 for 40MB \n2. #100 for 100MB \n3. #100 for 350MB (1G/Tik Tok/Youtube) \n4. #200 for 200MB (3days) \n5. #300 for 1GB \n6. #500 for 2GB (2days) \n99 Next \n0 Back");

    if (xai==1) {
        alert ("You now have 50MB of Data for One day.")
    } else if (xai==2){
        alert ("You now have 100MB of Data for One day.")

    }

   }
   else if (xa==2) {
    let xaii = prompt ("1. #200 for 200MB \n2. #350 for 500MB");
    if(xaii==1){
        alert ("You now have 200MB of Data for One week.")
    }else if(xaii==2){
        alert ("You now have 500MB of Data for One week.")

    }

   }
   else if(xa==3){
    let xaiii = prompt("1. #500 for 1GB \n2. #1000 for 2GB");
    if(xaiii==1){
        alert("You now have 1GB of Data for One month.")
    }else if(xaiii==2){
        alert("You now have 2GB of Data for One month.")

    }

   }
   
}


if (x==2) {
    let xb = prompt ("1. WhatsApp \n2.Facebook  \n3.Instagram \n4.Tik Tok \n5.Ayoba \n6.All Social Bundles \n7.YouTube, Intagram & Tik Tok \n8.Opera Mini News \n9.Social Mega bundles \n99.Next");
}

if (x==3) {
    let xc = alert ("Your data balance bonus: 10MB expires 31-08-2022 17:35:42");
}

if (x==4) {
    let xd = prompt ("1.Travelpass Plan \n2.Data Hybrid  \n3.Inflight Roaming Data \n4.Free Incoming roamimg call \n5.Int`l calling Bundle \n6.Roaming Balance check");
}

if (x==5) {
    let xe = prompt ("1.Bonus Airtime \n2.Bonus Data  \n3.Recharge \n4.Back");
    if (xe==1) {
        let xei = prompt ("Yellow! You are qualified but your airtime balance is high. You can borrow airtime or data when your balanceis lower than #99.99 \n9.Next")
    }
}

if (x==6) {
    let xf = prompt ("1.Transfer from Data balance \n2.Buy for a Friend \n3.Request for a friend \n4.View Pending Request \n0.Back \n00.MainMenu");
}

if (x==7) {
    let xg = prompt ("1.Youtube Video Packs \n2.Startimes Video Packs \n3.1GB (YouTube only) + 500MB (Data access) \n4.Showmax mobile");
}

if (x==8) {
    let xh = prompt ("1.TopDeal4me \n2.Data4me \n3.Recharge4me \n4.Combo4me");
}
else {
    alert("Wrong number. Input 1 to 10.")
   }



