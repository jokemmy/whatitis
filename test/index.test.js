
import { JSDOM } from 'jsdom';
import itis from '../src/index';

test( 'itis.Undefined', () => {
  expect( itis.Undefined( undefined )).toBeTruthy();
  expect( itis.Undefined( null )).toBeTruthy();
  expect( itis.Undefined( 0 )).toBeFalsy();
  expect( itis.Undefined( '' )).toBeFalsy();
  expect( itis.Undefined( NaN )).toBeFalsy();
});

test( 'itis.Defined', () => {
  expect( itis.Defined( undefined )).toBeFalsy();
  expect( itis.Defined( null )).toBeFalsy();
  expect( itis.Defined( 0 )).toBeTruthy();
  expect( itis.Defined( '' )).toBeTruthy();
  expect( itis.Defined( NaN )).toBeTruthy();
});

test( 'itis.Element', () => {
  const { document } = new JSDOM( '<!DOCTYPE html><p>Hello world</p>' ).window;
  expect( itis.Element( document.querySelector( 'p' ))).toBeTruthy();
});

test( 'itis.Window', () => {
  const { window } = new JSDOM( '<!DOCTYPE html><p>Hello world</p>' );
  expect( itis.Window( window )).toBeTruthy();
});

test( 'itis.Document', () => {
  const { document } = new JSDOM( '<!DOCTYPE html><p>Hello world</p>' ).window;
  expect( itis.Document( document )).toBeTruthy();
});

test( 'itis.Array', () => {
  expect( itis.Array([])).toBeTruthy();
});

test( 'itis.Number', () => {
  expect( itis.Number( 1 )).toBeTruthy();
  expect( itis.Number( 0.1 )).toBeTruthy();
  expect( itis.Number( NaN )).toBeTruthy();
  expect( itis.Number( Infinity )).toBeTruthy();
});

test( 'itis.Function', () => {
  expect( itis.Function(() => {})).toBeTruthy();
});

test( 'itis.RegExp', () => {
  expect( itis.RegExp( /\w/ )).toBeTruthy();
  expect( itis.RegExp( new RegExp( '^a$' ))).toBeTruthy();
});

test( 'itis.Boolean', () => {
  expect( itis.Boolean( true )).toBeTruthy();
  expect( itis.Boolean( false )).toBeTruthy();
});

test( 'itis.Date', () => {
  expect( itis.Date( new Date())).toBeTruthy();
});

test( 'itis.Error', () => {
  expect( itis.Error( new Error( 'error' ))).toBeTruthy();
});

test( 'itis.Null', () => {
  expect( itis.Null( null )).toBeTruthy();
});

test( 'itis.Null', () => {
  expect( itis.String( '' )).toBeTruthy();
  expect( itis.String( new String( '' ))).toBeTruthy(); // eslint-disable-line
});

test( 'itis.ArrayLike', () => {
  expect( itis.ArrayLike({ length: 0 })).toBeTruthy();
  expect( itis.ArrayLike({ length: '0' })).toBeFalsy();
});

test( 'itis.Arguments', () => {
  function testArguments() {
    return itis.Arguments( arguments ); // eslint-disable-line
  }
  expect( testArguments()).toBeTruthy();
  expect( itis.Arguments({ length: '0' })).toBeFalsy();
});

test( 'itis.isClassOf', () => {
  class EXample {}
  const itisEXample = itis.classOf( EXample );
  expect( itisEXample( new EXample())).toBeTruthy();
});
