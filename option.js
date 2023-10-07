
const activeCellElement = document.getElementById("active-cell");
const textAlignHighlight= document.getElementsByClassName("text_align");
const bold_btn = document.getElementById("bold");
const italic_btn = document.getElementById("italic");
const underline_btn = document.getElementById("underline");

// intial stage no one cell selacted
// and acivecell created on let keyword because the we update cative cell
let activeCell = null;

// const intialStage = {
//     fontFamily : "",
//     isBold : false,
//     isItalic : false,
//     isUnderLine : false ,
//     textAlign : 'left',
//     backGroundColor : "#fff",
//     textColor :"#000",
//     fontSize : 14,
// }

let activeStatOption ;

function onCellFocus(e) {
    activeCell = e.target;
    activeCellElement.innerText = activeCell.id;
    const computedStyle = getComputedStyle(activeCell);
    activeStatOption ={
        fontFamily:computedStyle.fontFamily,
        isBold :computedStyle.fontWeight === "600",
        isItalic :computedStyle.fontStyle === "italic",
        isUnderLine :computedStyle.textDecoration.includes("underline"),
        textAlign : computedStyle.textAlign,
        backGroundColor :computedStyle.backgroundColor,
        textColor :computedStyle.color,
        fontSize :computedStyle.fontSize
    }
  highlightOptionButtonsOnFocus();
}

// made a commenFunction to makesure the option on active cell selected or not
function toggleButtonsStyle(button , isSelected){
    if (isSelected) {
        // currently selected cell in the bold state.
        button.classList.add("active-option");
      } else {
        button.classList.remove("active-option");
      }
}

function highlightOptionButtonsOnFocus(){

     // check if the cell is in the bold state or not .
     //   // currently selected cell in the bold state.
     //   boldButton.classList.add("active-option");
     // } else {
     // if (activeOptionsState.isBoldSelected) {
     //   boldButton.classList.remove("active-option");
     // }
    toggleButtonsStyle(bold_btn, activeStatOption.isBold);

         // check if the selected cell is italic or not .
         // if (activeOptionsState.isItalicSelected) {
         //   // the current cell is italic text.
         //   italicButton.classList.add("active-option");
        // } else {
         //   italicButton.classList.remove("active-option");
        // }
    toggleButtonsStyle(italic_btn, activeStatOption.isItalic);

        
          // check if the selected cell is underline or not .

          // if (activeOptionsState.isUnderLineSelected) {
          //   // the cell is underlined
          //   underlinedButton.classList.add("active-option");
          // } else {
          //   underlinedButton.classList.remove("active-option");
          // }
    toggleButtonsStyle(underline_btn, activeStatOption.isUnderLine);
    textAlignHighlightButton(activeStatOption.textAlign);
}

function onClickBold(boldButton){
    // toggle the class activecell or not to show it is selected or not
    boldButton.classList.toggle("active-option");

    if(activeCell){
        //store default value of active cell
        if(activeStatOption.isBold === false){
            //text to bolder
            activeCell.style.fontWeight ="600";
            // activeStatOption.isBold === true;
        }else {
            activeCell.style.fontWeight ="400";
            // activeStatOption.isBold === false
        }
        activeStatOption.isBold = !activeStatOption.isBold;
    }
}

function onClickItalic(italicButton){
    // toggle to active class or not
     italicButton.classList.toggle("active-option");
     if(activeCell){
        if(activeStatOption.isItalic){
            activeCell.style.fontStyle ="normal";
            // activeStatOption.isItalic = false;
        }else{
            activeCell.style.fontStyle ="italic";
            // activeStatOption.isItalic = true;
        }
        activeStatOption.isItalic = !activeStatOption.isItalic;
     }
}

function onUnderLine(underlineButton){
    underlineButton.classList.toggle("active-option");
    if(activeStatOption.isUnderLine){
        activeCell.style.textDecoration="none";
    }else{
        activeCell.style.textDecoration="underline"
    }
    activeCell.style.textDecoration = !activeCell.style.textDecoration;
}

function textAlignHighlightButton(textalignvalue){

    // textAlignValue === "left" => we have to highlight only left button
    // textAlignValue === "right" => we have to highlight only right button
    // textAlignValue === "center" => we have to highlight only center button
    for(let i = 0 ; i < textAlignHighlight.length ; i++){
        if(textAlignHighlight[i].getAttribute("data-value") === textalignvalue){
            textAlignHighlight[i].classList.add("active-option");
        }else{
            textAlignHighlight[i].classList.remove("active-option");
        }
       
    }
}

function textAlign(alignButton){
    let selectedValue = alignButton.getAttribute("data-value");
    textAlignHighlightButton(selectedValue);
    // change the text alignment.
    if(activeCell){
        activeCell.style.textAlign= selectedValue;
        activeStatOption.textAlign = selectedValue;
    }
}

function onchangeTextColor(onchangeColor){
    let colorValue = onchangeColor.value;
    if(textColor){
        activeCell.style.color= colorValue;
        activeStatOption.textColor=colorValue
    }
}

function onchangeBackGroundColor(onchangeColor){
    let colorValue = onchangeColor.value;
    if(textColor){
        activeCell.style.backgroundColor= colorValue;
        activeStatOption.backGroundColor=colorValue
    }
}


function onChangeFontFamily(fontFamilySelected) {
    let selectedValue = fontFamilySelected.value;
    if (activeCell) {
      activeCell.style.fontFamily = selectedValue;
      activeStatOption.fontFamily = selectedValue;
    }
  }
  
function onChangeFontSize(fontSizeSelected) {
    let selectedValue = Number(fontSizeSelected.value);
    if (activeCell) {
      activeCell.style.fontSize = selectedValue+"px";
      activeStatOption.fontSize = selectedValue+"px";
    }
  }
