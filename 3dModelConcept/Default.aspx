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
        <%--<div id="dropdowns">
            <table>
                <tr>
                    <td></td>
                    <td>
                        <asp:DropDownList ID="DropDownList1" runat="server" DataSourceID="odsFileNames"
                            DataTextField="Name" DataValueField="Name">

                        </asp:DropDownList>
                        
                        <asp:ObjectDataSource runat="server" 
                            ID="odsFileNames" 
                            SelectMethod="Get" 
                            TypeName="WebApplication4.Controllers.DataFileController"></asp:ObjectDataSource>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>

        </div>--%>
        <div id="info">
            <a href="http://www.nanosoft.com.au" target="_blank" rel="noopener">nanosoft </a>

            3d rendering example from vasic SIC lazer output

        </div>

        <script src="js/Default.js"></script>

    </form>

</body>
</html>


