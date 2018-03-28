<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="test.aspx.cs" Inherits="WebApplication4.test" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:DropDownList ID="DropDownList1" runat="server" DataSourceID="ObjectDataSource1" DataTextField="Name" DataValueField="Name"></asp:DropDownList>
            <asp:ObjectDataSource runat="server" ID="ObjectDataSource1" SelectMethod="Get" TypeName="WebApplication4.Controllers.DataFileController"></asp:ObjectDataSource>
        </div>
    </form>
</body>
</html>
