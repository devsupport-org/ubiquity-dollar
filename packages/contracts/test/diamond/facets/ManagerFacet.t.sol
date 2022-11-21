// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../DiamondTestSetup.sol";


contract TestManagerFacet is AddManagerFacetSetup {

    function testCanCallGeneralFunctions() public {
         // try to call function on new Facet
        ManagerFacet(address(diamond)).getExcessDollarsDistributor(contract1);
    }

    function testCanCallAdminFunction_OnlyWith_AdminRole() public prankAs(admin) {
         // try to call function with access control on new Facet 
        ManagerFacet(address(diamond)).setCreditTokenAddress(contract1);
    }

    function testShouldUpdateDiamondStorage() public prankAs(admin) {
         // try to call function with access control on new Facet 
        ManagerFacet(address(diamond)).setCreditTokenAddress(contract1);
        assertEq(ManagerFacet(address(diamond)).getCreditTokenAddress(), contract1);
    }

}