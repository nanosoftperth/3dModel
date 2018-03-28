
var urlBASE = '../api/LaserCoordinate/';

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "api/LaserCoordinate",
    "method": "GET",
    "headers": {
        "cache-control": "no-cache",
        "postman-token": "98993769-3def-6cb9-46ea-97f14ed642c7"
    }
}


function modelChange(val) {

    $('#DropDownList1').prop('disabled', 'disabled');

    settings.url = urlBASE + val;

    $.ajax(settings).done(function (response) {

        init(response);
        $('#DropDownList1').prop('disabled', false);

    });
}





if (!Detector.webgl) Detector.addGetWebGLMessage();

var container, stats;
var camera, scene, renderer, particles, geometry, material, parameters, i, h, color, sprite, size;
var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;


function init(particles) {

    container = document.createElement('div');
    //document.body.appendChild(container);

    $('#3dModelContainer div').remove();
    $('#3dModelContainer').append(container);

    //camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
    // camera.position.z = 100;

    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 10000);

    camera.position.x = 865;
    camera.position.y = -548;
    camera.position.z = 3600;
    camera.rotation = { x: 0.22192157831362413, y: 0.30165147221819744, z: -0.06907040577362897 };



    scene = new THREE.Scene();
    //scene.fog = new THREE.FogExp2(0x000000, 0.0008);

    // lights
    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1);
    scene.add(light);
    var light = new THREE.DirectionalLight(0x002288);
    light.position.set(-1, -1, -1);
    scene.add(light);
    var light = new THREE.AmbientLight(0x222222);
    scene.add(light);

    //geometry
    geometry = new THREE.Geometry();

    var textureLoader = new THREE.TextureLoader();

    var sprite1 = textureLoader.load("http://i.imgur.com/cTALZ.png");


    $(particles).each(function (indx, itm) {


        var vertex = new THREE.Vector3();

        vertex.x = itm.x - 1000;
        vertex.y = itm.y - 1000;
        vertex.z = itm.z - 1000;

        // vertex.x = Math.random() * 2000 - 1000;
        // vertex.y = Math.random() * 2000 - 1000;
        // vertex.z = Math.random() * 2000 - 1000;

        geometry.vertices.push(vertex);


    });

    for (i = 0; i < 10; i++) {

        var vertex = new THREE.Vector3();

        vertex.x = Math.random() * 2000 - 1000;
        vertex.y = Math.random() * 2000 - 1000;
        vertex.z = Math.random() * 2000 - 1000;

        //geometry.vertices.push(vertex);

    }

    var distance = 1000;

    for (var i = 0; i < 5000; i++) {

        var vertex = new THREE.Vector3();

        var theta = THREE.Math.randFloatSpread(360);
        var phi = THREE.Math.randFloatSpread(360);

        vertex.x = distance * Math.sin(theta) * Math.cos(phi);
        vertex.y = distance * Math.sin(theta) * Math.sin(phi);
        vertex.z = distance * Math.cos(theta);

        geometry.vertices.push(vertex);
    }

    var particles = new THREE.PointCloud(geometry, new THREE.PointCloudMaterial({
        color: 0xffffff
    }));

    particles.boundingSphere = 50;

    particles = new THREE.Points(geometry, material);

    //particles.rotation.x = Math.random() * 6;
    //particles.rotation.y = Math.random() * 6;
    //particles.rotation.z = Math.random() * 6;

    scene.add(particles);

    //create the renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    //add ability to control the camera with the mouse etc
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.noZoom = false;
    controls.noPan = false;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;
    controls.keys = [65, 83, 68];
    controls.addEventListener('change', render);



    stats = new Stats();
    container.appendChild(stats.dom);

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);

    window.addEventListener('resize', onWindowResize, false);

    animate();
}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function onDocumentMouseMove(event) {

    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;

}

function onDocumentTouchStart(event) {

    if (event.touches.length === 1) {

        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;

    }

}

function onDocumentTouchMove(event) {

    if (event.touches.length === 1) {

        event.preventDefault();

        mouseX = event.touches[0].pageX - windowHalfX;
        mouseY = event.touches[0].pageY - windowHalfY;

    }

}

//

function animate() {

    requestAnimationFrame(animate);
    controls.update();
    render();


}

function render() {

    renderer.render(scene, camera);
    stats.update();
}



$(document).ready(function () {

    //assign the clieck event listener to the drop down list 
    $('#DropDownList1').change(function () { modelChange($(this).val()) });

});

//select the first option in the list
modelChange(1);