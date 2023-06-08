import { a } from '../index.mjs';
import { expect } from 'chai';

describe( "Public API", function() {
  describe( "Exports:", 
    it( 'should export an `a` function:', function() {
      expect( a ).to.be.a('function');
    })
  )
});