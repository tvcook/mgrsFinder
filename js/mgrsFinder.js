$(function(){
    // TAG: - DEBUG:
    // $("#mgrsCoordinates").val("11sps4742799889");
    $("#coordinateForm").on("submit", function(e) {
        e.preventDefault();
        handleSubmit();
    });
    $("input").on('keypress',function(e) {
        if(e.which == 13) {
            $("#coordinateForm").submit();
            e.target.blur();
            return false;
        }
    });
    $("#clearBtn").on("click", function() {
        clearBtnHandler();
    });
});

function handleSubmit() {
    resetValidation();
    try {
        let decimal = mgrs.toPoint($("#mgrsCoordinates").val());
        let dms = convertDMS(decimal[1], decimal[0]);
        showGCS(dms);
        showLinks(decimal);
        showClearBtn();
    } catch (error) {
        console.log(error);
        setInvalid();
        clearContent();
    }
    return false;
}

function showClearBtn() {
    $("#clearBtn").parent().removeClass("d-none");
    $("#submitBtn").parent().addClass("pl-2");
}

function clearBtnHandler() {
    $("#mgrsCoordinates").val("");
    clearContent();
    resetValidation();
    $("#clearBtn").parent().addClass("d-none");
    $("#submitBtn").parent().removeClass("pl-2");
}

function forceUpperCase(input) {
    let p = input.selectionStart;
    input.value = input.value.toUpperCase();
    input.setSelectionRange(p, p);
}

function clearContent() {
    $("#gcsCoordinates").empty();
    $("#links").empty();
    $(".coordinate-container").addClass("d-none");
}

function resetValidation() {
    $("input").removeClass("is-invalid");
    $(".invalid-feedback").hide();
}

function setInvalid() {
    $("#mgrsCoordinates").addClass("is-invalid");
    $(".invalid-feedback").show();
}

function toDegreesMinutesAndSeconds(coordinate) {
    let absolute = Math.abs(coordinate);
    let degrees = Math.floor(absolute);
    let minutesNotTruncated = (absolute - degrees) * 60;
    let minutes = Math.floor(minutesNotTruncated);
    let seconds = Math.floor((minutesNotTruncated - minutes) * 60);

    return degrees + "&deg;" + minutes + "&quot;" + seconds + "&apos;";
}

function convertDMS(lat, lng) {
    let latitude = toDegreesMinutesAndSeconds(lat);
    let latitudeCardinal = lat >= 0 ? "N" : "S";
    let longitude = toDegreesMinutesAndSeconds(lng);
    let longitudeCardinal = lng >= 0 ? "E" : "W";

    return latitude + latitudeCardinal + " " + longitude + longitudeCardinal;
}

function showGCS(coordinates) {
    $("#gcsCoordinates").empty();
    $(".coordinate-container").removeClass("d-none");
    const $smallTag = $("<p class='lead m-0'/>").html(coordinates);
    $("#gcsCoordinates").html($smallTag);
}

function showLinks(coordinates) {
    $("#links").empty();
    $(".link-container").removeClass("d-none");
    /*
    * Google Maps URL Format
    *
    * no marker
    * https://www.google.com/maps/place/49.46800006494457,17.11514008755796
    *
    * with marker
    * https://www.google.com/maps/search/?api=1&query=36.26577,-92.54324
    *
    * with marker and satellite view (unsupported)
    * http://maps.google.com/maps?t=k&q=loc:47.5951518+-122.3316393
    *
    */
    let gMapsURL = "https://www.google.com/maps/search/" + coordinates[1] + "," + coordinates[0];
    const $gmTag = $("<a class='btn btn-outline-primary bg-light w-100 shadow-sm' href='" + gMapsURL + "' target='_blank'>&nbsp;Google Maps</a>");
    $gmTag.prepend("<img src='./img/maps-icon.svg' width='42' height='42'/>");
    $("#links").append($gmTag);
    $gmTag.wrap("<div class='row'/>").wrap("<div class='col'/>");
    /*
    * Google Earth URL Format
    *
    * no marker
    * https://earth.google.com/web/@51.52864165,-0.1016182,100000d
    *
    * with marker
    * https://earth.google.com/web/search/48.857419,2.294905/
    *
    */
    let gEartURL = "https://earth.google.com/web/search/" + coordinates[1] + "," + coordinates[0];
    const $geTag = $("<a class='btn btn-outline-primary bg-light w-100 mt-3 shadow-sm' href='" + gEartURL + "' target='_blank'>&nbsp;Google Earth</a>");
    $geTag.prepend("<img src='./img/google-earth.svg' width='42' height='42' />");
    $("#links").append($geTag);
    $geTag.wrap("<div class='row'/>").wrap("<div class='col'/>");
    /*
    * OpenStreetMap URL Format
    *
    * with marker
    * https://www.openstreetmap.org/?mlat=33.6203&mlon=-116.2518#map=9/33.6203/-116.2518
    *
    */
    let osmURL = "https://www.openstreetmap.org/?layers=Y&mlat=" + coordinates[1] + "&mlon=" + coordinates[0] + "#map=13/" + coordinates[1] + "/" + coordinates[0];
    const $osmTag = $("<a class='btn btn-outline-primary bg-light w-100 mt-3 shadow-sm' href='" + osmURL + "' target='_blank'>&nbsp;OpenStreetMap</a>");
    $osmTag.prepend("<img src='./img/open-street-map.png' width='42' height='42' />");
    $("#links").append($osmTag);
    $osmTag.wrap("<div class='row'/>").wrap("<div class='col'/>");
}
