class NavComponent{

get linksNavMenu(){
    return $$("#primary-menu li[id*=menu]");
}

get firstListNavMenu(){
    return $('#primary-menu li');
}
}

export default new NavComponent();