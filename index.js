// index.js

const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let left = dodger.style.left;
  left = parseInt(left);
  left -= 1;
  dodger.style.left = `${left}px`;
}

function moveDodgerRight() {
  let left = dodger.style.left;
  left = parseInt(left);
  left += 1;
  dodger.style.left = `${left}px`;
}

describe('moveDodgerLeft()', () => {
  beforeEach(() => {
    dodger.style.left = '100px';
  });

  it('moves the DODGER to the left', () => {
    let left = parseInt(dodger.style.left);

    moveDodgerLeft();

    let newPosition = parseInt(dodger.style.left);

    if (left > 0) {
      expect(newPosition).to.be.below(left);
    } else {
      expect(newPosition).to.equal(left);
    }
  });
});

describe('moveDodgerRight()', () => {
  beforeEach(() => {
    dodger.style.left = '100px';
  });

  it('moves the DODGER to the right', () => {
    let left = parseInt(dodger.style.left);

    moveDodgerRight();

    let newPosition = parseInt(dodger.style.left);

    if (left < 360) {
      expect(newPosition).to.be.above(left);
    } else {
      expect(newPosition).to.equal(left);
    }
  });
});
