// console.log('hello world')

AOS.init({
    once: true
});

window.onload = () => {

    swal('Click On any Image for better view and more options');

    let gallery = document.getElementById('gallery')
    let Colors = ['#F44336', '#5E35B1', '#84FFFF', '#EEFF41', '#FFEB3B', '#FB8C00', '#0f9d58'];

    let keywords = ['London', 'Programming', 'Animals', 'Food', 'Technology', 'Dark', 'Colored', 'Typography', 'Cars', 'City', 'Airplane']

    let query = document.getElementById('search');
    let LoadButton = document.getElementById('LoadButton');
    let previousButton = document.getElementById('previousButton');
    let LoadMore = document.getElementById('LoadMore');
    let randomKeyIndex = Math.floor(Math.random() * (keywords.length));
    let searchClick = false;

    const hashValueFunc = () => {
        if (location.hash == '') {
            query.value = keywords[randomKeyIndex];
        } else {
            query.value = location.hash.substring(1).replace(/%20/g, ' ');
        }
    }

    hashValueFunc();

    searchValue = query.value;
    location.hash = searchValue;

    let clientID = 'paaIIZM7FwQ35wbx44h7kGuUCb6kw7dTecZD3erC6tM';
    let PageNo = 1;
    itemsPerPage = 15;

    const fetchFunc = async () => {
        let url = `https://api.unsplash.com/search/photos/?client_id=${clientID}&query=${searchValue}&page=${PageNo}&per_page=${itemsPerPage}`
        let getData = await fetch(url);
        let data = await getData.json();
        return data
    }

    // query.value = '';

    let dataVariable = fetchFunc();
    const createElementFunc = () => {
        dataVariable.then((data) => {

            // console.log(data)
            if (data.total != 0) {
                $('.Error').css({
                    'display': 'none',
                })
                for (let i = 0; i < data.results.length; i++) {
                    let randomColorIndex = Math.floor(Math.random() * Colors.length),
                        ImageTag = document.createElement('img'),
                        ImageParent = document.createElement('div'),
                        ImageInfoButton = document.createElement('div'),
                        ImageInfoButtonLines = document.createElement('div'),
                        ImageInfo = document.createElement('div'),
                        visitImage = document.createElement('div'),
                        viewImage = document.createElement('div'),
                        buttonParent = document.createElement('div'),
                        cradit = document.createElement('div'),
                        craditItems = document.createElement('div');
                    craditItems.classList = `craditItems`;
                    buttonParent.classList = `buttonParent`;
                    ImageInfoButtonLines.classList = `ImageInfoButtonLines`;
                    $('<h6>Visit </h6>').appendTo(visitImage);
                    $('<h6>View HQ</h6>').appendTo(viewImage);
                    $(`<h5>By ${data.results[i].user.name}</h5>`).appendTo(craditItems);
                    $(`<i class="fab fa-instagram instagram${i}"></i>`).appendTo(craditItems);
                    $(cradit).append(craditItems);
                    ImageInfo.classList = `ImageInfo ImageInfo${i}`;
                    ImageInfoButton.classList = `ImageInfoButton ImageInfoButton${i}`;
                    visitImage.classList = `visitImage visitImage${i} infoButton`;
                    viewImage.classList = `viewImage viewImage${i} infoButton`;
                    cradit.classList = `cradits cradit${i}`;
                    $(ImageParent).attr('data-aos', 'fade-up')
                    ImageParent.style.background = Colors[randomColorIndex];
                    ImageParent.classList = `ImageParent ImageParent${i}`;
                    ImageTag.classList = `image image${i}`;
                    ImageTag.onerror = () => {
                        ImageTag.style.display = 'none'
                    }
                    // ImageParent.appendChild(ImageTag);
                    $(ImageInfoButton).append(ImageInfoButtonLines)
                    $(buttonParent).append(visitImage, viewImage)
                    $(ImageInfo).append(buttonParent, cradit);
                    $(ImageParent).append(ImageTag, ImageInfo, ImageInfoButton);
                    gallery.appendChild(ImageParent);
                    ImageTag.style.display = 'none'
                    ImageTag.onload = () => {
                        ImageTag.style.display = 'block';
                        ImageParent.style.background = 'transparent';
                        LoadButton.style.display = 'grid';

                    }
                    // console.log($(ImageParent))

                    $(ImageInfoButton).click((e) => {
                        // $(ImageInfo).toggle('ImageInfoOpen');
                        // $(ImageInfo).toggle('ImageInfoOpen');
                        $(ImageInfo).toggleClass('ImageInfoOpen');
                        e.preventDefault();
                    })

                    $(ImageParent).click((e) => {
                        if (!$(e.target).closest(`.ImageInfo${i} , .ImageInfoButton${i}`).length) {
                            $(ImageInfo).removeClass('ImageInfoOpen');
                        }
                    })

                    $(visitImage).click(() => {
                        window.open(data.results[i].links.html, '_blank');
                    })
                    $(viewImage).click(() => {
                        window.open(data.results[i].urls.full, '_blank')
                    })

                    if (data.results[i].user.instagram_username != null) {
                        $(`.instagram${i}`).css({
                            'display': 'block',
                        })
                    } else {
                        $(`.instagram${i}`).css({
                            'display': 'none',
                        })
                    }

                    $(`.instagram${i}`).click(() => {
                        window.open(`https://www.instagram.com/${data.results[i].user.instagram_username}/`, "_blank");
                    })


                    ImageTag.addEventListener('click', () => {
                        $(`.ImageParent${i}`).css({
                            'grid-column': 'span 2',
                            'grid-row': 'span 2',
                            'object-fit': 'cover',
                            'width': 'auto',
                            'height': 'auto',
                        })
                        ImageInfoButton.style.display = 'block';
                        ImageInfo.style.display = 'grid';
                        $(`.image${i}`).css({
                            'max-width': '70vh',
                        })
                    })

                    $(window).click((e) => {
                        // if (!$(e.target).closest.(`.ImageParent${i}`).length) {
                        //     console.log('hello world')
                        // }
                        if (!$(e.target).closest(`.ImageParent${i}`).length) {
                            $(`.ImageParent${i}`).css({
                                'grid-column': 'span 1',
                                'grid-row': 'span 1',
                                'object-fit': 'unset',
                                'width': '20rem',
                                'height': '20rem',
                            })
                            ImageInfoButton.style.display = 'none';
                            $(ImageInfo).removeClass('ImageInfoOpen');
                            $(`.image${i}`).css({
                                'max-width': 'none',
                            })
                        }
                    })
                }
            }
            else {
                $('.Error').css({
                    'display': 'grid',
                })
            }
        })
    }

    createElementFunc();

    let imageTag = document.getElementsByClassName('image');


    const addingSrc = () => {
        dataVariable.then((data) => {
            for (let i = 0; i < data.results.length; i++) {
                imageTag[i].src = data.results[i].urls.regular;
            }
        })
    }

    addingSrc();


    let search = document.getElementById('searchButton');

    const eventFunc = (noOfPage) => {
        LoadButton.style.display = 'grid';
        searchValue = document.getElementById('search').value;
        $('.ImageParent').remove();
        const updateFetch = async () => {
            let updatedData = await fetch(`https://api.unsplash.com/search/photos/?client_id=${clientID}&query=${searchValue}&page=${noOfPage}&per_page=${itemsPerPage}`);
            let data = await updatedData.json();
            return data;
        }

        dataVariable = updateFetch();

        createElementFunc();

        dataVariable.then((data) => {
            // console.log(data)
            for (let i = 0; i < data.results.length; i++) {
                imageTag[i].src = data.results[i].urls.regular;
            }
        })
    }

    $('#search').keypress(function (e) {
        if (e.keyCode === 13) {
            search.click();
        }
        $('#UpperBody').css({
            'top': '0'
        })
    });

    $(search).on('click', (e) => {
        location.hash = query.value;
        // console.log('hello world')
    })

    $(window).on('hashchange', (e) => {
        query.value = location.hash.substring(1).replace(/%20/g, ' ');
        PageNo = 1;
        eventFunc(PageNo);
        dataVariable.then((data) => {
            if (data.total == 0) {
                $('#LoadButton , #previousButton').css({
                    'display': 'none'
                })
            } else {
                $('#LoadButton , #previousButton').css({
                    'display': 'grid'
                })
            }
        })
    })

    $(previousButton).click(() => {
        dataVariable.then((data) => {
            if (PageNo > 1) {
                previousButton.style.display = 'grid';
                PageNo--;
                eventFunc(PageNo)
            } else {
                swal('You are already on the First Page for your search', {
                    icon: 'warning',
                    title: 'First Page'
                });
                previousButton.style.display = 'none';
            }
        })
    })

    $(LoadButton).click(() => {
        dataVariable.then((data) => {
            if (data.total_pages > PageNo) {
                LoadButton.style.display = 'grid';
                previousButton.style.display = 'grid';
                PageNo++;
                eventFunc(PageNo);
            }
            else {
                swal('You are already on the Last Page for your search', {
                    icon: 'warning',
                    title: 'Last Page'
                });
                LoadButton.style.display = 'none';
            }
        })
    })

    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (window.pageYOffset == 0) {
            $('#UpperBody').css({
                'top': '0rem',
            });
        }
        else if (st > lastScrollTop) {
            $('#UpperBody').css({
                'top': '-8rem',
            })
        } else {
            $('#UpperBody').css({
                'top': '0rem',
            })
        }
        lastScrollTop = st;
    }, false);

}