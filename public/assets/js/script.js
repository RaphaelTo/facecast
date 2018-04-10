function getValueSelect(select_id){
    var select = document.getElementById(select_id);
    var options = select.getElementsByTagName('option');
    var get = options[select.selectedIndex].text;
    return get;
}