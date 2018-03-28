<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplication4.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <title>3D Laser test page</title>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />

    
    <link href="css/Default.css" rel="stylesheet" />


    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/three.js"></script>
    <script src="js/controls/TrackballControls.js"></script>
    <script src="js/Detector.js"></script>
    <script src="js/stats.min.js"></script>
    

</head>
<body>



    <form id="form1" runat="server">

        <div id="optionsselecter">
            <asp:DropDownList ID="DropDownList1" CssClass="dropdownlist"  runat="server" DataSourceID="ObjectDataSource1" DataTextField="Name" DataValueField="ID"></asp:DropDownList>
            <asp:ObjectDataSource runat="server" ID="ObjectDataSource1" SelectMethod="Get" TypeName="WebApplication4.Controllers.DataFileController"></asp:ObjectDataSource>
        </div>

        <div id="3dModelContainer"></div>

        <script src="js/Default.js"></script>

    </form>

</body>
</html>


